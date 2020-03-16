import React, { Component } from 'react';
import { ArticleWrap } from './styledMore'
class Article extends Component {
  render() {
    return (
      <ArticleWrap>
        
            <div 
              className="result-guide-item" 
              
            >  
            {
          this.props.articleList.recommend && this.props.articleList.recommend.id && (
              <div className="table-mode"
              key={this.props.articleList.recommend.id}
              > 
                <div className="table-cell"> 
                  <div className="thumb-wrap"> 
                    <img 
                      alt='图片'
                      src={this.props.articleList.recommend.cover+"!300X225"} 
                    /> 
                  </div> 
                </div> 
                <div className="table-cell txt-left describe-wrap"> 
                  <div className="main-title font-lg">{this.props.articleList.recommend.cityName}小众攻略</div> 
                  <div className="sub-title font-sm"> 
                    <span>{this.props.articleList.recommend.theme}个主题推荐</span> | <span>{this.props.articleList.recommend.path}个路线推荐</span>
                  </div> 
                  <div className="desc font-sm"></div> 
                </div>
              </div> 
          )}
            </div>
          
        
      { 
        this.props.articleList && (
          <section 
          className='result-article-container result-section'
          
          >
            <header 
              className="header-title-wrap"
            > 
              <span>-</span> 
              <span className="section-title">主编精选</span> 
              <span>-</span> 
            </header>
            
            {
              this.props.articleList.articleList.map((value)=>(
                <a 
                  className="result-item" 
                  href="/"
                  key={value.id}
                > 
                  <div className="table-mode"> 
                    <div className="table-cell"> 
                      <div className="thumb-wrap"> 
                        <img 
                          alt='图片'
                          src={value.cover+"!300X300"}
                        /> 
                      </div> 
                    </div> 
                    <div className="table-cell txt-left describe-wrap"> 
                      <div className="main-title font-md">
                      {value.title}
                      </div>
                    </div> 
                  </div>
                </a>
              ))
            }
            <a 
              href="/" 
              className="article-more">更多主编精选</a>
          </section>
        )
      
      }
      {
        this.props.articleList.themeList &&  this.props.articleList.themeList.length>0 && 
      <section className='result-article-container result-section'>
        <header 
          className="header-title-wrap"
        > 
          <span>-</span> 
          <span className="section-title">主编精选</span> 
          <span>-</span> 
        </header>
        
        { this.props.articleList.themeList.map((value2)=>(
            <a 
              className="result-item" 
              href="/"
              key={value2.id}
            > 
              <div className="table-mode"> 
                <div className="table-cell"> 
                  <div className="thumb-wrap"> 
                    <img 
                      alt='图片'
                      src={value2.cover+"!200X200"}
                    /> 
                  </div> 
                </div> 
                <div className="table-cell txt-left describe-wrap"> 
                  <div className="main-title font-md">
                  {value2.title}
                  </div>
                  <div className="sub-title font-sm">{value2.recommendCount}个推荐</div>
                </div> 
              </div>
            </a>
          ))
        }
        <a 
          href="/" 
          className="article-more">更多主编精选</a>
      </section>
  }
      <section className='result-article-container result-section'>
        <header 
          className="header-title-wrap"
        > 
          <span>-</span> 
          <span className="section-title">飞小编推荐</span> 
          <span>-</span> 
        </header>
        {
          this.props.articleList && this.props.articleList.playList.map(value3 =>(
            <div 
              className="result-item2"
              key={value3.id}
            > 
              <div className="table-mode"> 
                <div className="table-cell"> 
                  <div className="thumb-wrap"> 
                    <a href="/"> 
                      <img
                        alt='图片'
                        src={value3.avatar+"!180X180"}
                      /> 
                    </a> 
                  </div> 
                </div> 
                <div className="table-cell txt-left describe-wrap"> 
                  <div className="info font-sm"> 
                    <a href="/">{value3.nickname}</a> |<span>{value3.scenicName}</span> 
                  </div>
                  <a href="/"> 
                    <div className="main-title font-md">{value3.title}</div> 
                    <div className="desc font-sm">{value3.desc}</div> 
                  </a> 
                </div> 
              </div> 
            </div>
          ))
        }
        <a 
          href="/" 
          className="article-more">更多飞小编推荐</a>
      </section>
    </ArticleWrap>
    );
  }
}

export default Article;