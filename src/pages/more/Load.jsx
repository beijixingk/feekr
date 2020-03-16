import React, { Component } from 'react';
import { Loading } from '../main/home/styledHome'
class Load extends Component {
  render() {
    return (
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
    );
  }
}

export default Load;