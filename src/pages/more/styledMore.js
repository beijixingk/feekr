import styled from 'styled-components'

export const NewWrap = styled.div `
  padding-top: .1rem;
  margin-top: 0;
  padding: .2rem .1rem;
  color: #2d2d2d;
  height:100%;
  overflow: scroll;
  background:#fff;
  .title {
    font-size: 16px;
    line-height: 1.7;
  }
  .author {
    color: #666;
    font-size: 12px;
    display: inline-block;
    padding: 10px 0;
    img {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    span {
      vertical-align: middle;
      padding-left: 5px;
    }
  }
  .view-count {
    font-size: 12px;
    color: #666;
    display: inline-block;
    padding-top: 12px;
    margin-left: 10px;
    
  }  

  .rich_media_content{
    overflow: hidden;
    color: #3e3e3e;
    p {
      margin: .05rem;
      line-height: 1.6;
      font-size: 17px;
      clear: both;
      min-height: .1em;
      img {
        display: block;
        margin: .05rem auto;
        max-width: 100%;
        height: auto !important;
      }
    }
  }


`

export const Headers = styled.header `
  text-align: center;
  position: relative;
  padding: ${props=>props.padding || '20px' } ;
  
  border-bottom: 1px solid #e5e5e5;
  background: #fff;

    a{
      font-size: 25px;
    }
    span{
      font-size: 17px;
      color:#2d2d2d;
      display:block;
      text-align:center;
    }
    .icon-fanhui {
      position: absolute;
      left: 16.7px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      color: #ccc;
      font-size: 33px;
    }
    .favor-btn {
      position: absolute;
      top: 1%;
      left: 75%;
      font-size: 25px;
      color: #9B9B9B;
    }
    .share-btn {
      position: absolute;
      top: 1%;
      left: 87%;
      font-size:22px;
      color: #9B9B9B;
    }
  
  
  
`

export const NewsWrap = styled.div `
  width:100%;
  height:100%;
  overflow:scroll;

`

export const NewsList = styled.div `
  background: #fff;
  .list{
    border-top: 1px solid #F2F2F2;
    padding: 14px 11px;
    border-bottom: 1px solid #F2F2F2;
    a{
      display: flex;
      align-items: center;
      text-decoration: none;
      img{
        width: 72px;
        height:72px;
        display:block;
      }
      .news-item {
        margin-left: 24px;
        flex: 1;
        
        .news-title {
          margin-bottom: 6px;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px !important;
          color: #2d2d2d;
          height:39px;
          display: -webkit-box;
        }
        .spans{
          font-size: 10px;
          color:#2d2d2d;
        }
      }
    }
    a+a{
      border-top: 1px solid #F2F2F2;
      margin-top: 11px;
      padding-top: 11px;
    }
  }

`

export const ResultMain = styled.div `
  .result_main{
    
    position: relative;
    width:100%;
    min-height:500px;
    overflow-y:scroll;
    .nav_wrap{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      border-top: 1px solid #e9e9e9;
      display: flex;
      align-content: center;
      justify-content: space-around;
      padding: 12px;
      background:#fff;
      .selected{
        display:block;
        color: #1abc9c;
        width:40%;
        font-size:16px;
        border-bottom:1px solide #1abc9c;
        height:100%;
        text-align:center;
      }
      .unselected{
        display:block;
        color: #707070;
        width:40%;
        font-size:16px;
        border-bottom:1px solide #1abc9c;
        height:100%;
        text-align:center;
      }
      span{
        width: 1px;
        background-color: #e9e9e9;
        display:block;
      }
    }
    .nav_wrap:after {
      content: '';
      position: absolute;
      bottom: 2px;
      height: 2px;
      width: 30%;
      left: ${props=>props.left};
      background-color: #1abc9c;
    }
  }
  .result_null{
    margin-top:10px;
    padding:30px 10px 0;
    width:100%;
    min-height:300px;
    background:#fff;
    span{
      font-size: 50px;
      color: #e5e5e5;
      text-align:center;
      margin:0 auto;
      display:block;
    }
    p{
      font-weight:normal;
      font-size:14px;
      color:#666;
      text-align:center;
    }
  }
`

export const ShopWrap = styled.div `
 
  .market-main{
    padding:47px 10px 10px;
    height:500px;
    overflow-y:scroll;
    width:100%;
    .market-item {
      position: relative;
      display: block;
      box-sizing: border-box;
      margin-bottom: 10px;
      text-align: center;
      border: 1px solid #e9e9e9;
      background-color: #fff;
      margin-top:10px;
      .market-cover {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 168.75px;
        display: block;
      }
      .market-desc {
        margin-top: 25px;
        color: #2D2D2D;
        font-weight: 400;
      }
      .market-name {
        margin-top: 12px;
        margin-bottom: 25px;
        color: #666;
        font-size: 10px;
      }
      .market-label {
        position: absolute;
        top: 16px;
        left: 0;
        padding: 0 11px;
        color: #fff;
        line-height: 34px;
        background-color: rgba(26,188,156,0.8);
      }
    }
    .market-more{
      background-color: #fff;
      margin-top: -15px;
      display: block;
      text-align: center;
      color: #1abc9c;
      font-size: 14px;
      padding: 15px 0;
    }
  }

`
export const ArticleWrap = styled.div `
  height:500px;
    overflow-y:scroll;
    width:100%;
  .result-guide-item {
    display: block;
    background: #fff;
   
    margin-top: 60px;

    .table-mode {
      display: table;
      width: 100%;
      padding: 10px;
      table-layout: fixed;
      .table-cell:first-child {
        width: 40%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        .thumb-wrap {
          overflow: hidden;
          width: 100%;
          margin-bottom: 5px;
          img {
            display: block;
            width: 100%;
          }
        }
      }
      .describe-wrap {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        padding-left: 10px;
        text-align: left !important;
        .main-title {
          color: #2D2D2D;
          margin-bottom: 8px;
          font-size: 16px !important;
        }
        .sub-title {
          color: #999;
          margin-bottom: 5px;
          font-size: 12px !important;
          span:nth-child(1) {
            padding-right: 5px;
          }
          span:nth-child(2) {
            padding-left: 5px;
          }
        }
        .desc {
          color: #666;
          max-height: 34px;
          overflow: hidden;
          font-size: 12px !important;
        }
      }
    }
  }
  .result-section {
    display: block;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    .header-title-wrap {
      padding: 10px 0;
      color: #2D2D2D;
      line-height: 1.8;
      font-size: 16px !important;
      text-align: center;
    }
    .result-item {
      display: block;
      border-bottom: 1px solid #E8E8E8;
      padding: 10px 0;
      margin: 5px;
      .table-mode {
        display: table;
        width: 100%;
        table-layout: fixed;
        .table-cell {
          display: table-cell;
          vertical-align: middle;
          text-align: center;
        }
        .table-cell:first-child {
          width: 18%;
          .thumb-wrap {
            overflow: hidden;
            width: 100%;
            margin-bottom: 5px;
            img {
              display: block;
              width: 100%;
            }
          }
        }
        .describe-wrap {
          padding-left: 10px;
          .main-title {
            color: #2D2D2D;
            margin-bottom: 8px;
            text-align:left;
          }
          .sub-title{
            color: #999;
            margin-bottom: 5px;
            font-size: 12px !important;
            text-align:left;
          }
        }
      }
    }
    .article-more{
      background-color: #fff;
      margin-top: -5px;
      display: block;
      text-align: center;
      color: #1abc9c;
      font-size: 14px;
      padding: 15px 0;
    }
    .result-item2 {
      display: block;
      border-bottom: 1px solid #E8E8E8;
      padding: 10px 0;
      margin: 5px;
      .table-mode {
        display: table;
        width: 100%;
        table-layout: fixed;
        .table-cell {
          display: table-cell;
          text-align: center;
        }
        .table-cell:first-child {
          width: 10%;
          vertical-align: top;
          .thumb-wrap {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 5px;
            img {
              display: block;
              width: 100%;
            }
          }
        }
        .describe-wrap {
          padding-left: 10px;
          .info {
            color: #999;
            font-size: 12px !important;
            text-align:left;
            a {
              color: #1abc9c;
              padding-right: 5px;
            }
            span {
              padding-left: 5px;
              color: #999;
            }
          }
          .main-title {
            color: #2D2D2D;
            margin-bottom: 8px;
            text-align:left;
            font-size: 14px !important;
          }
          .sub-title{
            color: #999;
            margin-bottom: 5px;
            font-size: 12px !important;
            text-align:left;
          }
          .desc {
            color: #666;
            max-height: 34px;
            overflow: hidden;
            text-align:left;
            font-size: 12px !important;
          }

        }
      }
    }
  }
`