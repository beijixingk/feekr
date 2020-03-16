import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperWrap } from './SwiperWrap'
class Swiper extends React.Component {
  state = {
    imgHeight: 192,
  }
  render() {
    // console.log(this.props);
    
    return (
      <SwiperWrap {...this.props} >
        <WingBlank>
          <Carousel
            autoplay={this.props.auto}
            infinite
            dots={false}
          >
            {this.props.data.map((val,index )=> (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.props.imgHeight }}
              >
                <img
                  src={this.props.img[index]}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top',height: this.props.imgHeight }}
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
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default Swiper