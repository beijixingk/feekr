import React, { Component } from 'react';
import Search from 'components/search/Search'
// import Swiper from 'components/swiper/Swiper'
import Nav from './Nav'
import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperWrap } from './NavWrap'

import Mainlist from './Mainlist.jsx'


import { connect } from 'react-redux'
import { GETLIST } from 'pages/main/action-types'
import {Loading } from '../home/styledHome'


const mapState= state=>({
  list:state.main
})
const mapDispatch = dispatch =>({
  loadData(){
    dispatch({
      type:GETLIST,
      url:'/api/shop/home/index?shopid=FK'
    })
  }
})

@connect(mapState,mapDispatch)
class Vacation extends Component {

  state = {
    result:[],
    isShow:'block',
    isShow2:'none'
   
  }

  componentDidMount() {
    this.props.loadData()
    console.log(this.props);
    
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
             <div  style={{ display:this.state.isShow}}>
                <Search
                height='.3rem'
                placeholder='搜索目的地/关键字'
              >
                
              </Search>
            { this.props.list.list.result 
             &&(
              <SwiperWrap >
                <WingBlank>
                  <Carousel
                    autoplay={true}
                    infinite
                    dotActiveStyle={{
                      backgroundColor:'white'
                    }}
                    dotStyle={{
                      backgroundColor:'#000',
                      opacity: 0.2
                    }}
                  >
                    {
                    this.props.list.list.result.slider.map((val,index )=> (
                      <a
                        key={index}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 153.59 }}
                      >
                        <img
                          src={'https://images.weserv.nl/?url='+val.cover+'!750X360'}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                        />
                      </a>
                    ))}
                  </Carousel>
                </WingBlank>
              </SwiperWrap>
            )}
              <Nav></Nav>
              
            <Mainlist></Mainlist>


              </div>
           
        
              
            </>
        );
    }
}

export default Vacation;