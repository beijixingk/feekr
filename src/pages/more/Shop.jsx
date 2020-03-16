import React, { Component } from 'react';
import { ShopWrap } from './styledMore'
class Shop extends Component {
  render() {
    return (
      <ShopWrap>
        <div className='market-main'>
        {
          this.props.shopList.map((value)=>(
            <a 
              href="/" 
              className="market-item" 
              data-target="position"
              key={value.productId}
            > 
              <img 
                className="market-cover" 
                src={value.productCover+"!640X360"} /> 
                <h5 className="market-desc font-md">{value.productDesc}</h5> 
                <p className="market-name">{value.productName}</p> 
            <span className="font-md market-label">¥{value.productPrice}</span> 
            </a>
          ))
        }
        
        <a 
          href="/" 
          className="get-more-list market-more">更多商品推荐</a>
        </div>
      </ShopWrap>
    );
  }
}

export default Shop;