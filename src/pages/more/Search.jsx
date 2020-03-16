import React, { Component } from 'react';
import { SearchMain, Headers} from '../main/home/styledHome'

import searchAnimate from './searchAnimate';

@searchAnimate
class Search extends Component {
  render() {
    return (
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
                              <span className="iconfont icon-lajitong"></span>
                          </a>
                          <div className="tag-container">    
                              <a href="/" className="tag-item">北京</a>    
                              <a href="/" className="tag-item">北京</a>    
                              
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
                              <a href="/" className="tag-item">北京</a>    
                              <a href="/" className="tag-item">北京</a>    
                              
                          </div>
                      </div>
                  </section>
              </div>
          </Headers>
      </SearchMain>
    );
  }
}

export default Search;