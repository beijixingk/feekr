import React, { Component } from 'react';
import {ListWrap} from 'components/listcontainer/Listcontainer'
import SubTitle from 'components/listcontainer/SubTitle'
import ListTitle from 'components/listcontainer/ListTitle'

import feekr_code from 'assets/images/feekr_code.png'

import {MainlistWrap} from './NavWrap'
import {connect} from 'react-redux'
import { GETLIST } from '../action-types'
import { get } from 'utils/http'

const mapState = state => ({
    list:state.main
})
const mapDispatch = dispatch=>({
    loadData(){
        dispatch({
            type:GETLIST,
            url:'/api/shop/home/index?shopid=FK'
        })
    }
})


@connect(mapState,mapDispatch)
class Mainlist extends Component {
    state = {
        FKlist:[],
        guessLike:[]
    }
    async componentDidMount(){
        let FKlist = await get({
            url:'/api/news/lists?shopid=FK'
        })
        let guessLike = await get({
            url:'/api/shop/home/guess_like?page=1&shopid=FK'
        })
        this.setState({
            FKlist:FKlist.result.list,
            guessLike:guessLike.result.list
        })

    }

    render() {
        return (
            <MainlistWrap>
                <ListWrap>
                    <SubTitle
                    title='新品&独家'
                    size='.12rem'
                    ></SubTitle>
                    <div className='list1'>
                    {
                        this.props.list.list.result && (
                            this.props.list.list.result.newProduct.map((value,index)=>(
                                <a  
                                key={value.id}
                     href="/" 
                     className="common-goods common-search-entry-item">
                        <img alt='图片' 
                        data-src="https://p-product-pic.feekr.com/2019/0819/aaf9d3be.jpg!200X200" 
                        src={'https://images.weserv.nl/?url='+value.cover+"!200X200"} className="common-goods-img lazyloaded" /> 
                        <h3 className="common-goods-content one-line-ellipsis">
                            <font >
                                <font>
                                    {value.productName}
                                </font>
                            </font>
                        </h3> 
                        <p className="common-goods-price" >
                            <span className="common-goods-num">
                                <font>
                                <font>¥{value.currentPrice}&nbsp;</font>
                                </font>
                            </span>
                            <font>
                              <font>起</font>
                            </font>
                            <span className="common-goods-unit">
                                <span className="common-goods-bold">
                                    <font>
                                        <font>/</font>
                                    </font>
                                </span>
                                <font>
                            <font>{value.unitCount}{value.unit}</font>
                                </font>
                            </span>
                        </p>
                      </a>
                    
                            ))
                        )
                    }
                    
                    </div>
                    <SubTitle
                    title='本周特卖'
                    size='.12rem'
                    ></SubTitle>
                    <div className='list1'>
                    {
                        this.props.list.list.result && (
                            this.props.list.list.result.specialsProduct.map((value,index)=>(
                                <a  
                                key={value.id}
                     href="/" 
                     className="common-goods common-search-entry-item">
                        <img alt='图片' data-src="https://p-product-pic.feekr.com/2019/0819/aaf9d3be.jpg!200X200" src={'https://images.weserv.nl/?url='+value.cover+"!200X200"} className="common-goods-img lazyloaded" /> 
                        <h3 className="common-goods-content one-line-ellipsis">
                            <font >
                                <font>
                                    {value.productName}
                                </font>
                            </font>
                        </h3> 
                        <p className="common-goods-price" >
                            <span className="common-goods-num">
                                <font>
                                <font>¥{value.currentPrice}&nbsp;</font>
                                </font>
                            </span>
                            <font>
                              <font>起</font>
                            </font>
                            <span className="common-goods-unit">
                                <span className="common-goods-bold">
                                    <font>
                                        <font>/</font>
                                    </font>
                                </span>
                                <font>
                            <font>{value.unitCount}{value.unit}</font>
                                </font>
                            </span>
                        </p>
                      </a>
                    
                            ))
                        )
                    }
                    
                    </div>
                </ListWrap>
                <ListWrap>
                <ListTitle
                    dir='bottom'
                    color='#F2F2F2'
                    title='主题推荐'
                    subTitle='称为最新的出游主题'
                    >

                    </ListTitle>
                    <div className='list2'>
                    {
                       this.props.list.list.result &&( this.props.list.list.result.theme.map((value)=>(
                            <li 
                             className="theme-entry-item"
                             key={value.id}
                            >
                                <a href="/" className="theme-entry-link">
                                    <img alt='图片' data-src="https://p-product-theme.feekr.com/2019/11/13/1002385dcb643e21031.jpg!750X300" src={'https://images.weserv.nl/?url='+value.cover+"!750X300"} className="theme-entry-img lazyloaded" /> 
                                    <p className="theme-entry-content">
                                        <font>
                                            <font>
                                                {value.name}
                                            </font>
                                        </font>
                                    </p>
                                </a>
                            </li>
                        ))
                    ) }
                    </div>
                </ListWrap>
                
                <ListWrap>
                    <ListTitle
                        dir='bottom'
                        color='#F2F2F2'
                        title='主题推荐'
                        subTitle='称为最新的出游主题'
                    ></ListTitle>
                    <div className='list3'>
                    <ul className="story-entry-item-box">
                        {this.state.FKlist.slice(0,3).map((value)=>(
                            <li key={value.id} className="story-entry-item">
                                <a href="/" className="story-entry-link">
                                    <img alt='图片' data-src="https://newscover.feekr.com/2019/04/30/171928ed92443fc8400a21547a788a85874ca1.jpg!600X400" src={'https://images.weserv.nl/?url='+value.cover+"!600X400"} className="story-entry-pic lazyloaded" />
                                    <div>
                                        <h3 className="story-entry-describe three-line-ellipsis">
                                            <font>
                                                <font>
                                                    {value.title}
                                                </font>
                                            </font>
                                        </h3> 
                                        <p className="story-entry-labes">
                                            <font>
                                                
                                                    {
                                                        value.tags.map((value2,index)=>(
                                                            <font key={index}> {value2} </font>
                                                        ))
                                                    }
                                              
                                            </font>
                                        </p>
                                    </div>
                                    
                                </a>
                            </li>
                        ))}
                    </ul>      
                    </div>
                </ListWrap>
                <ListWrap>
                    <ListTitle
                        dir='bottom'
                        color='#F2F2F2'
                        title='猜你喜欢'
                        subTitle='这些也许是你喜欢的'
                    ></ListTitle>
                    <div className='list4'>
                    {
                      this.state.guessLike &&(  this.state.guessLike.map((value)=>(
                            <a  
                                key={value.id}
                                href="/" 
                                className="common-goods maybe-like-item"
                            >
                                <img 
                                alt='图片'
                                data-src={value.cover+"!400X250"} 
                                src={'https://images.weserv.nl/?url='+value.cover+"!400X250"} 
                                className="common-goods-img lazyloaded" />  
                                <h3 className="common-goods-content one-line-ellipsis">
                                
                                           {value.productName}
                            
                                </h3> 
                                <p className="common-goods-price">
                                    <span className="common-goods-num">
                                        <font>
                                            <font >¥{value.currentPrice}&nbsp;</font>
                                        </font>
                                    </span>
                                    <font>
                                        <font >起</font>
                                    </font>
                                    <span className="common-goods-unit">
                                        <span className="common-goods-bold">
                                            <font >
                                                <font>/ {value.unitCount}</font>
                                            </font>
                                        </span>
                                        <font>
                                            <font>{value.unit}</font>
                                        </font>
                                    </span>
                                </p>
                            </a>
                        )))
                    }
                    </div>
                </ListWrap>
                <section className="footer-box">
                    <div className="footer-box-brand">
                        <p>
                            <i className="iconfont footer-box-logo icon-feekr"></i>
                        </p> 
                        <p className="flex-center-v footer-box-link">
                            ©2016Feekr
                        </p>
                    </div> 
                    <div className="footer-box-vcode">
                        <img alt='图片' src={feekr_code} /> 
                        <p>
                            长按二维码或添加微信：feekr_trip  
                        </p>
                        <p>
                            关注feekr小众旅行，获取最新玩法攻略
                        </p>
                    </div>
                    <div className="footer-box-btns">
                        <a href="/aboutus" className="base-bg">
                            关于Feekr
                        </a> 
                        <a href="/joinus" className="base-bg">
                          联系我们
                        </a>
                    </div>
                </section>
            </MainlistWrap>
        );
    }
}

export default Mainlist;