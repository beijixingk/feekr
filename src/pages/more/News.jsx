import React, { Component } from 'react';
import { NewsWrap,Headers,NewsList } from './styledMore'
import { get } from 'utils/http'
class News extends Component {
  state = {
    newsList:[]
  }
  async componentDidMount(){
    let results = await get({
      url:'/api/news/lists?id=&count=10&page=1'
    })
    this.setState({
      newsList:results.result.list
    })
  }
  render() {
    return (
      <NewsWrap>
        <Headers
        padding='10px'
        >
          <a 
            href="/home" 
            className="iconfont icon-fanhui" 
            data-history="back"> </a>
          <span>最新旅行资讯</span>
        </Headers>
        <NewsList>
          <div className='list'>
            {
              this.state.newsList.map((value)=>(
                <a 
                  className="flex-wrap" 
                  href="/"
                  key={value.id}
                >
                  <img 
                    alt='图片'
                    className="news-cover" 
                    data-original="https://newscover.feekr.com/2019/04/30/171928ed92443fc8400a21547a788a85874ca1.jpg!300X300" 
                    src={'https://images.weserv.nl/?url='+value.cover+"!300X300"} />
                  <div 
                    className="flex-item news-item">
                    <p 
                      className="news-title font-md">{value.title}</p>
                    <p className='spans'>
                      <span>{value.viewCount}人阅读</span>
                      <span className="separate"> / </span>
                      <span>{value.time}</span>
                    </p>
                  </div>
                </a>
              ))
            
            }
          </div>
        </NewsList>
      </NewsWrap>
    );
  }
}

export default News;