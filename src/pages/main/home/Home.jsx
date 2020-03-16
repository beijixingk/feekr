import React, { Component } from 'react';
import Swiper from '../../../components/swiper/Swiper'
import Listcontainer,{ListWrap} from 'components/listcontainer/Listcontainer'
import ListTitle from 'components/listcontainer/ListTitle'
import ListMore from 'components/listcontainer/ListMore'
import SubTitle from 'components/listcontainer/SubTitle'
import GrideProduct from './GrideProduct'
import Selected from './Selected'
import City from './City'

import gonglve from 'assets/images/gonglve.png'
import dujia from 'assets/images/dujia.png'
import huwai from 'assets/images/huwai.png'
import meiwu from 'assets/images/meiwu.png'
import yanjiusuo from 'assets/images/yanjiusuo.png'
import { NavWrap,SearchMain,MainHome ,Headers,Loading} from './styledHome'
import { NavLink } from 'react-router-dom'

import { SearchWrap,InputWrap } from 'components/search/SearchWrap'
import { CSSTransition } from 'react-transition-group'
import 'assets/animate.css'
import './sear.css'

import store from 'store'
import _ from 'lodash'

import { get } from 'utils/http'
class Home extends Component {
    constructor(){
        super()
        this.searchValue = React.createRef()
    }
    state = {
        flag:true,
        zindex:-10,
        childenMesg:'',
        isShow:'none',
        isShow2:'block',
        visited:[],
        hot:[]
    }
    getChildren=(result,msg)=>{
        this.setState({
            childenMesg:msg,
            isShow:'block',
            isShow2:'none'
        })
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
            let msgs = store.get('visitedKey') || []
            let keys = this.name.value
            msgs.push({
                keys
            })
            console.log(msgs);
            
            store.set('visitedKey',_.uniqBy(msgs,(value)=>{
                return value.keys !== keys
            }))
            this.setState({
                visited:store.get('visitedKey')
            })
            this.props.history.push({
                pathname:'/search_result',
                state:{key:this.name.value}
            })
             
        }else{
            return false
        }
    }

    async componentDidMount(){
        let hotCities = await get({
            url:'/api/guide/keywordlist'
        })
        this.setState({
            visited:store.get('visitedKey'),
            hot:hotCities.result.list
        })
    }
    clearCity(){
        store.remove('visitedKey')
        window.location.reload()
        this.setState({
            isShow:'none',
            isShow2:'block'
        })
    }
    render() {
        
        
        return (
            <>
            <Loading style={{display:this.state.isShow2}}>
                <div className='loading'>
                    <div className='spinner'>
                        <div className='react1'></div>
                        <div className='react2'></div>
                        <div className='react3'></div>
                    </div>
                    <p>加载中...</p>
                </div>
            </Loading>
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
                    <MainHome
                        {...this.state}>
                    <Swiper 
                    imgHeight={192}
                    data={['1', '2', '3']}
                    img={['https://wave-banner.feekr.com/2019/12/04/01492284b243228303ea2e42734c1f6e069a31.jpg','https://wave-banner.feekr.com/2019/12/04/01492284b243228303ea2e42734c1f6e069a31.jpg','https://wave-banner.feekr.com/2019/12/04/01492284b243228303ea2e42734c1f6e069a31.jpg']}
                    auto={true}
                    ></Swiper>
            
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
                <NavWrap>
                    <NavLink
                    to={{
                        pathname:'/guide',
                        state:'guide'
                    }}
                        >
                        <img src={gonglve} alt=""/>
                        <span>攻略</span>
                    </NavLink>
                    <NavLink
                    to={{
                        pathname:'/vacation',
                        state:'vacation'
                    }}>
                        <img src={dujia} alt=""/>
                        <span>度假</span>
                    </NavLink>
                    <a href='/'>
                        <img src={huwai} alt=""/>
                        <span>玩乐</span>
                    </a>
                    <a href='/'>
                        <img src={meiwu} alt=""/>
                        <span>美物</span>
                    </a>
                    <a href='/'>
                        <img src={yanjiusuo} alt=""/>
                        <span>研究所</span>
                    </a>
                </NavWrap>
                <Listcontainer parent={this} ></Listcontainer>
                <ListWrap
                moreTitle='更多目的地推荐'
                >
                    <ListTitle
                    dir='bottom'
                    color='#F2F2F2'
                    title='当季特惠'
                    subTitle='本季度最优惠的出游商品'
                    >

                    </ListTitle>
                    <SubTitle
                    title='国外度假'
                    ></SubTitle>
                    <GrideProduct></GrideProduct>
                    
                </ListWrap>
                <ListWrap
                >
                    <ListTitle
                        dir='bottom'
                        color='#F2F2F2'
                        title='目的地推荐'
                        subTitle='开启城市深度游攻略'
                    >
                        
                    </ListTitle>
                    <City></City>
                    <ListMore
                        moreTitle='更多目的地推荐'
                        ></ListMore>
                </ListWrap>   
                <ListWrap>
                    <ListTitle
                        dir='bottom'
                        color='#F2F2F2'
                        title='编辑精选'
                        subTitle='推荐最具小众特色的旅行体验'
                    >
                        
                    </ListTitle>
                    <Selected></Selected>
                    <ListMore
                        moreTitle='更多栏目推荐'
                        
                        ></ListMore>
                </ListWrap>  
            </MainHome>
              
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
                                            <span className="iconfont icon-lajitong" onClick={this.clearCity}></span>
                                        </a>
                                        <div className="tag-container">    
                                        {
                                          this.state.visited && this.state.visited.map((value,index)=>(
                                            <NavLink
                                            to={{
                                                pathname:'/search_result',
                                                state:{key:value.keys}
                                            }}
                                              className="tag-item"
                                              key={index}
                                          >{value.keys}</NavLink> 

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
                                                <NavLink
                                                to={{
                                                    pathname:'/search_result',
                                                    state:{key:value.title}
                                                }}
                                                  className="tag-item"
                                                  key={value.id}
                                                >{value.title}</NavLink>  
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

export default Home;