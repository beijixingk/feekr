import React, { Component } from 'react';
import { get } from 'utils/http'
import {NewWrap,Headers} from './styledMore'
import {Loading} from '../main/home/styledHome'
class New extends Component {
  state={
    newContent:'',
    isShow:'none',
    isShow2:'block'
  }
  async componentDidMount(){
    // let id = this.props.location.search.slice(1)
    var newContents = await get({
      url:`/api/article/detail?id=${this.props.location.state.id}==`
    })
    await this.setState(
      {
        newContent:newContents,
        isShow:'block',
        isShow2:'none'
      }
    )
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
        {/* <div > */}
          <Headers>
            <a 
              href="/home" 
              className="iconfont icon-fanhui" 
              data-history="back"> </a>
            <a
            href="/"
              className="iconfont icon-wujiaoxingkong1 favor-btn"> </a>
            <a
            href='/'
            className="iconfont icon-fenxiang share-btn"> </a>
          </Headers>
          {
            this.state.newContent.result && <NewWrap className='article-container body-space'>
            <div className="title regular-font">{this.state.newContent.result.content.title}</div>
              <a href='/'  className="author">
                <img 
                src={this.state.newContent.result.content.authAvatar} 
                alt="" /><span>{this.state.newContent.result.content.nickname}</span>
              </a>
              <div className="view-count">
                <span>总阅读数</span>
                {this.state.newContent.result.content.viewCount}
              </div>
                <div>
                  <div className='rich_media_content' dangerouslySetInnerHTML={{__html:this.state.newContent.result.content.content}}>
      
                  </div>
                </div>
              </NewWrap>
          }
        {/* </div> */}
        
      </>
      
      
    );
  }
}

export default New;