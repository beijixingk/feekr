import React, { Component } from 'react';
import { get,post } from 'utils/http'
import Search from 'components/search/Search'
import { ResultMain } from './styledMore'
import {Loading} from '../main/home/styledHome'
import Shop from './Shop'
import Article from './Article'
import qs from 'qs'

import { CSSTransition } from 'react-transition-group'
import 'assets/animate.css'
import '../main/home/sear.css'

import { SearchMain,Headers } from '../main/home/styledHome'
import { SearchWrap,InputWrap } from 'components/search/SearchWrap'

import store from 'store'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

class SearchResult extends Component {

  constructor(){
    super()
    this.searchValue = React.createRef()
  }
  state = {
    article:'selected',
    shop:'unselected',
    left:'10%',
    shopList:[],
    articleList:'',
    searchId:'',
    isShow:'block',
    isShow2:'none',
    flag:true,
    zindex:-10,
    visited:[],
    hot:[]
  }
  async componentDidMount(){
    let result = await get({
      url:`/api/shop/product/search?sort=&paymentType=1&keyword=${this.props.location.state.key}&page=1&count=5&shopid=FK`
    })
    await this.setState({
      shopList:result.result
    })
    // var params = new FormData();
    // params.append('id','6170')



    let searchList = await get({
      url:`/api/guide/searchlist?keyword=${this.props.location.state.key}&count=8`
    })
    let lists = searchList.result.list
    let data = {}
    if(lists.length>0){
      data = qs.stringify({
        id:lists[0].id
      })
    }else{
      data = qs.stringify({
        keyword: this.props.location.state.key
      })
    }

    let search = await post({
      url:'/api/guide/search',
      data,
      method:'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    let hotCities = await get({
      url:'/api/guide/keywordlist'
    })
    this.setState({
      articleList:search.result,
      visited:store.get('visitedKey'),
      hot:hotCities.result.list
    })

  }
  handleClick2=(kind)=>{
    console.log(kind);
    if(kind==='shop'){
      this.setState({
        article:'unselected',
        shop:'selected',
        left:'60%'
      })
    }else{
      this.setState({
        article:'selected',
        shop:'unselected',
        left:'10%'
      })
    }
  }
  handleClick = () => {
    this.setState((state)=>{
        if(state.zindex===-10){
            return {
                flag: !(state.flag),
                zindex:10,
                // auto:true
            }
        }else{
            return {
                flag: !(state.flag),
                zindex:-10,
                auto:true
            }
        }
        
    })
  }
  handleKeyPress= (e)=>{
      if(e.keyCode===13 && this.name.value!==''){
        console.log(123);
        
        let msgs = store.get('visitedKey') || []
        let keys = this.name.value

        msgs.push({
          keys
        })
        store.set('visitedKey',_.uniqBy(msgs,(value)=>{
          return value.keys !== keys
        }))
        
          this.props.history.push({
              pathname:'/search_result',
              state:{key:this.name.value}
          })
          this.setState({
            visited:store.get('visitedKey'),
            isShow:'block',
            isShow2:'none',
          })
          // this.forceUpdate()
          window.location.reload()
      }else{
          return false
      }
  }
  handleCities(city){
    console.log(1);
    
    this.props.history.push({
      pathname:'/search_result',
      state:{key:city}
    })
    window.location.reload()
  }

  render() {
    return (
      <>
      <div style={{ display:this.state.isShow}}>
                <CSSTransition
                    in={this.state.flag}
                    timeout={300}
                    // unmountOnExit={true}
                    classNames={{
                        enter:'animated',
                        enterActive:'fadeIn',
                        enterDone:'animated',
                        exit:'animated',
                        exitActive:'fadeOut',
                        exitDone:'animated',
                    }}
                >
                  <div>
        {/* <Search
          height='.34rem'
          placeholder='搜索目的地'
          radius={20}
          padding='10px'
          margin='10px 0'
          // width='300px'
          bc='#fff'
          backgroundColor='#F6F6F6'
          onClick={this.handleClick}
        >
          
        </Search> */}
        <SearchWrap
            height='.367rem'
            width='2px'
            color="#e8e8e8"
            radius={6}
            backgroundColor='#fff'
            onClick={this.handleClick}
            >
            <InputWrap>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                    <span>搜索目的地/攻略/旅行资讯</span>
                </div>
            </InputWrap>
        </SearchWrap>
        <ResultMain
          {...this.state}
        >
        {
        this.state.shopList.list &&  this.state.shopList.list.length>0 ?(
            <div className='result_main'>
              <nav className='nav_wrap'>
                <div onClick={this.handleClick2.bind(this,'article')} className={this.state.article}>资讯</div>
                <span></span>
                <div onClick={this.handleClick2.bind(this,'shop')} className={this.state.shop}>商城</div>
              </nav>
              {
                this.state.article==='selected' ? <Article articleList={this.state.articleList}></Article> : <Shop shopList={this.state.shopList.list}></Shop> 
              } 
              
            </div>
          ):(
         this.state.shopList.list ? (
          <div className='result_null'>
          <span className='iconfont icon-toast-error'></span>
          <p>没有找到你要的信息，换个词试试~</p>
        </div>
         ):(
          <Loading style={{display:'block'}}>
              <div className='loading'>
                  <div className='spinner'>
                      <div className='react1'></div>
                      <div className='react2'></div>
                      <div className='react3'></div>
                  </div>
                  <p>加载中...</p>
              </div>
          </Loading>
         )
          )

        } 
         
        </ResultMain>
        </div>
        </CSSTransition>
        <CSSTransition
                    in={!this.state.flag}
                    timeout={300}
                    // unmountOnExit={true}
                    classNames={{
                        enter:'animated',
                        enterActive:'fadeInRight',
                        enterDone:'animated',
                        exit:'animated',
                        exitActive:'fadeOutRight',
                        exitDone:'animated'
                    }}
                >
                    <SearchMain className='main'
                    zindex={this.state.zindex}
                    >
                        <Headers
                        padding='6px'
                        >
                            <div className="table-mode"> 
                                <div className="table-cell iconfont icon-fanhui txt-left back-to-guide"
                                onClick={this.handleClick}
                                >
                                </div> 
                                <div className="table-cell search-bar"> 
                                    <div className="search-input guide-search-form" data-search="site"> 
                                        <input 
                                         type="search" 
                                         className="search-position" 
                                         placeholder="搜索目的地" 
                                         id="search-site" 
                                        //  ref={this.searchValue}
                                        ref={i=>this.name=i}
                                         onKeyUp={this.handleKeyPress.bind(this)}
                                        />
                                        <span className="iconfont icon-search-clear"></span> 
                                    </div> 
                                </div> 
                                <div className="table-cell">
                                    <span className="search-btn">搜索</span>
                                </div> 

                            </div>

                            <div className='scroll-wrap'>
                                <section className='recent-search'>
                                    <div className='search-tag'>
                                        <header className="header-title-wrap"> <span>-</span> 
                                            <span className="section-title">最近搜索</span> 
                                            <span>-</span> 
                                        </header>
                                        <a href="/" className="del-btn">
                                            <span className="iconfont icon-lajitong"></span>
                                        </a>
                                        <div className="tag-container"
                                         style={{fontSize:'10px !important'}}
                                        >    
                                        {
                                          this.state.visited.map((value,index)=>(
                                            <a
                                            // to={{
                                            //     pathname:'/search_result',
                                            //     state:{key:value.keys}
                                            // }}
                                              className="tag-item"
                                              key={index}
                                              onClick={this.handleCities.bind(this,value.keys)}
                                          >{value.keys}</a>    

                                          ))
                                        }
                                             
                                            
                                        </div>
                                    </div>
                                </section>
                                <section className='recent-search'>
                                    <div className='search-tag'>
                                        <header className="header-title-wrap"> <span>-</span> 
                                            <span className="section-title">热门搜索</span> 
                                            <span>-</span> 
                                        </header>
                                        {/* <a href="/" className="del-btn">
                                            <span className="iconfont icon-lajitong"></span>
                                        </a> */}
                                        <div className="tag-container">    
                                            {
                                              this.state.hot && this.state.hot.map((value)=>(
                                                <a
                                                // to={{
                                                //     pathname:'/search_result',
                                                //     state:{key:value.title}
                                                // }} 
                                                  className="tag-item"
                                                  key={value.id}
                                                  onClick={this.handleCities.bind(this,value.title)}
                                                >{value.title}</a>  
                                              ))
                                            }  
                                            
                                            
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Headers>
                    </SearchMain>
                </CSSTransition>
      </div>
      </>
    );
  }
}

export default SearchResult;