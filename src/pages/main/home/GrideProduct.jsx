import React, { Component } from 'react';
import { GrideProductWrap } from './styledHome'
import { get } from 'utils/http'
class GrideProduct extends Component {
    state = {
        productList:''
      }
      async componentDidMount(){
        let result = await get({
          url:'/api/product/module?moduleId=1'
        })
        this.setState({
          productList:result.result.product
        })
      }
    render() {
        return (
            <GrideProductWrap>
                {
                    this.state.productList.length > 0 &&
                    
                    this.state.productList[0].list.map((value)=>{
                        // if( value.productArea ===null)

                        return (
                        <a key={value.productId} href='/'>
                            <img src={'https://images.weserv.nl/?url='+value.productCover+'!200X200'} alt=""/>
                            <p className='product-title'>{value.productName}</p>
                            
                            <p className='area'> {value.productArea}-{value.productCity} </p>
                            <p className="font-sm price">
                                ￥
                                <span className="font-md">{value.productPrice}</span> 
                                起
                            </p>
                        </a>
                        )
                    })
                
                }
                   
            </GrideProductWrap>
        );
    }
}

export default GrideProduct;