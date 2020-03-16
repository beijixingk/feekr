import React, { Component } from 'react';
import { CityWrap } from './styledHome'
import { get } from 'utils/http'
class City extends Component {
    state = {
        Citylist:[]
    }
    async componentDidMount(){
        let result = await get({
            url:'/api/guide/cityrecommend'
        })
        // console.log(result.result.list);
        this.setState({
            Citylist:result.result.list
        })
    }
    render() {
        return (
            <CityWrap>

               {
                   this.state.Citylist.slice(0,4).map((value)=>(
                    <a 
                    className="city-item" 
                    href="/"
                    key={value.scenic}
                    > 
                        <div className="thumb-wrap"> 
                            <img 
                            alt='图片'
                            className="city-cover lazy" 
                            data-original="https://scenic01.feekr.com/2018/04/03/070651298244203be966840030a543b6860690.png!621X327" 
                            src={'https://images.weserv.nl/?url='+value.cover+"!621X327"} 
                            /> 
                            <div className="font-lg">{value.cityName}</div> 
                        </div> 
                        <p className="font-sm">{value.fxb}位当地飞小编推荐</p> 
                    </a>
                
                   
                   ))
               }
            </CityWrap>
        );
    }
}

export default City;