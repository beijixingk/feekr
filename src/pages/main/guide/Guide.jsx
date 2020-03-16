import React, { Component } from 'react';
import Search from 'components/search/Search'
import {ListWrap} from 'components/listcontainer/Listcontainer'
import { Recommend ,AreaList} from './styledGuide'
import { get } from 'utils/http'
import { Loading } from '../home/styledHome'
class Guide extends Component {
  state = {
    recommendlist:[],
    areaList:[],
    result:[],
    isShow:'none',
    isShow2:'block'
  }
    async componentDidMount(){
      let result = await get({
        url:'/api/guide/cityrecommend'
      })
      let areaList = await get({
        url:'/api/guide/citylist'
      })
      this.setState({
        recommendlist:result.result.list,
        areaList:areaList.result.list,
        isShow:'block',
        isShow2:'none'
      })
    }

    render() {
      console.log(this.props);
        
      
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
            <div style={{display:this.state.isShow}}>
              <Search
             padding='10px'
              backgroundColor='#F6F6F6'
              placeholder='搜索目的地'
              bc='#fff'
                radius={22}
                width='1px'
                color='#fff'
              ></Search>
              <ListWrap>
               <Recommend>
                <header className="header-title-wrap txt-center font-lg regular-font"> 
                  <span>-</span> 
                  <span className="section-title">当季小众推荐</span> 
                  <span>-</span> 
                </header>
               <div className='item-container clearfix body-space'>
                {this.state.recommendlist&&  (
                  
                    this.state.recommendlist.slice(0,4).map((value)=>(
                      <a 
                        href="/guide/detail?id=4102&amp;pv_from=guide_index_season" 
                        className="item pull-left" 
                        data-target="position"
                        key={value.scenic}
                      > 
                      <img 
                      referrer="no-referrer|origin|unsafe-url"
                        data-original="https://scenic01.feekr.com/2018/04/03/070651298244203be966840030a543b6860690.png!621X327" 
                        alt='图片'
                        src={'https://images.weserv.nl/?url='+value.cover} 
                      />
                        <div className="item-title txt-center city-title font-md">{value.cityName}</div> 
                        <div className="item-desc txt-center city-desc font-sm">
                          {value.desc}
                        </div> 
                      </a>
                    ))
                )
                    }
                  </div>
               </Recommend> 
              </ListWrap>
              <section className='area-list-container' >
              {this.state.areaList &&  (
                    this.state.areaList.map((value,index)=>(
                  <AreaList key={index}>
                  <div className='item-container'>
                    <header className="header-title-wrap txt-center font-lg"> 
                      <span className="section-title regular-font">{value.area}</span> 
                      <div className="sub-title txt-center font-sm"> 
                        {value.desc}
                      </div>
                    </header>
                    <div className='main-item'>
                     {
                       value.city.map((items)=>(
                        <a 
                          href="/guide/detail?id=6070&amp;pv_from=guide_index_area" 
                          className="item pull-left" 
                          data-target="position"
                          key={items.id}
                        > 
                          <img 
                            alt='图片'
                            data-original="https://scenic01.feekr.com/2014/10/07/2047010d67d469436a5f28e50f2ddf16a85b3b.jpg!412X310"
                            src={'https://images.weserv.nl/?url='+items.cover+"!412X310"} /> 
                            <div className="item-title txt-center city-title font-md">{items.name}</div> 
                        </a>
                       ))
                     } 
                     
                    </div>
                    
                  </div>
                </AreaList>
         
                ))
              )}
              </section>
              </div>
            </>
        );
    }
}

export default Guide;