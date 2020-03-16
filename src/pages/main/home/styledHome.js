import styled from 'styled-components'
import border from '../../../components/styled/border'

export const Loading = styled.div `
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    .loading{
        position: fixed;
        left: 50%;
        top: 50%;transform: translate(-50%, -50%);
        z-index: 999;
        .spinner{
            height: 40px;
            text-align: center;
            font-size: 8px;
            
            >div{
                background-color: #1abc9c;
                height: 100%;
                width: 6px;
                display: inline-block;
                margin:1px;
            }
            .react1{
                animation:load 1.2s infinite ease-in-out;
            }
            .react2{
                animation:load 1s infinite .3s;
            }
            .react3{
                animation:load 1s infinite .6s;
            }
            @keyframes load{
                0%{
                    transform:scaleY(0.4)
                }
                20%{
                    transform:scaleY(1)
                }
                40%{
                    transform:scaleY(0.4)
                }
                100%{
                    transform:scaleY(0.4)
                }
            }
        }
        p{
            text-align: center;
            color: #fff;
            padding: 5px;
        }
    }
    

`

export const MainHome = styled.div `
    background:#f6f6f6;
    display: block;
    position:relative;
    z-index:1;
`

export const NavWrap = styled.div `
    width:100%;
    height:.89rem;
    background:#fff;
    padding:15px 0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    
    a{
        flex:1;
        text-align:center;
        list-style-type:none;
        width:100%;
        display:block;
        img{
            display:inline-block;
            width:40px;
            height:40px;
        }
        span{
            display:block;
            font-size:.12rem;
            font-weight:normal;
            margin-top:.04rem;
            color:#2d2d2d;
        }
    }
`
export const GrideProductWrap = styled.div `
    padding: .14rem .11rem;
    font-weight:normal;
    display:flex;
    flex-direction:row;
    a{
        display:block;
        line-height: 1.8;
        color: #2d2d2d;
        width:32%;
        flex:1;
        margin-right:2%;
        img{
            display:block;
            width:100%;
            
        }
        p{
            text-align:center;
        }
        .product-title {
            padding: 0 .03rem;
            margin-top: .1rem;
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
        }
        .area {
            color: #666;
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
        }
        .price {
            color: #000;
            font-size: .12rem !important;
            .font-md {
                font-size: .14rem !important;
            }
        }
    }
`
export const CityWrap = border(
    styled.div `
        border: 1px solid #F2F2F2;
        padding-top: .08rem;
        padding-bottom: .08rem;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        padding: .14rem .11rem;
        font-weight:normal;
        color: #2d2d2d;
        .city-item {
            padding: .1rem 0;
            width: 49%;
        }
        .city-item:nth-child(2n) {
            margin-left: 2%;
        }
        .thumb-wrap {
            position: relative;
            background: #000;
            overflow: hidden;
            width: 100%;
            margin-bottom: .05rem;
        }
        .city-cover {
            opacity: .7;
            display: block;
            width: 100%;
        }
        .font-lg{
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            color: #fff;
            font-size: .16rem !important;
        }
        .font-sm {
            font-size: .12rem !important;
            text-align: center;
            font-weight:normal;
            color: #2d2d2d;
        }
    `


)

export const SelectWrap = border(
    styled.div `
        padding: 0rem .11rem;
        color: #2d2d2d;
        a {
            display: block;
            color: #2d2d2d;
            font-weight:normal;
            padding: .1rem 0 .15rem;
            border-bottom:1px solid #F2F2F2;
            .selected-title {
                margin-bottom: .15rem;
                font-size: .16rem !important;
            }
            .flex-wrap{
                align-items: center;
                display: flex;
                img{
                    width: 1.36rem;
                    display:block;
                }
                .selected {
                    margin-left: .15rem;
                    line-height: 1.8;
                    flex: 1;
                    .font-sm {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-size: .12rem !important;
                    }
                    .product-tag {
                        margin-top: .08rem;
                        color: #999;
                        white-space: pre-line;
                    }
                }

            }
        }
    `
)

export const SearchMain = styled.div `
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:#f6f6f6;
    z-index:${props=>props.zindex || -10};
`
export const Headers = styled.header `
  text-align: center;
  position: relative;
  
  

  .table-mode{
    display: table;
    width: 100%;
    table-layout: fixed;
    color: #2d2d2d;
    background: #fff;
    padding: ${props=>props.padding || '20px' } ;
    .icon-fanhui {
        width: 12%;
        color: #ccc;
        font-size: 28px;
        display: table-cell;
        vertical-align: middle;
    }
    .table-cell:nth-child(2) {
        width: 72%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        .guide-search-form{
            position: relative;
            width: 100%;
            background: #F5F5F5;
            border-radius: 40px;
            padding-left: 10px;
            padding: 3px 8px 3px 3px;
            input{
                padding: 5px 0;
                display: block;
                width: 100%;
                line-height: 1.6;
                background: transparent;
                font-size: 12px;
                border: none;
                border-radius: 0;
                margin-left:6px;
            }
            span{
                position: absolute;
                color: #CDCDCD;
                right: 4%;
                top: -4%;
                padding: 8px;
                display: block;
            }
        }
    }
    .table-cell:nth-child(3){
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        .search-btn {
            background: #1abc9c;
            color: #fff;
            padding: 5px 8px;
            border-radius: 6px;
            font-size: 12px;
        }
    }
  }
    .scroll-wrap{
    width:100%;
    height:500px;
    overflow-y:scroll;
    .recent-search{
      width:100%;
      .search-tag{
        margin-top:10px;
        padding:20px 10px;
        background: #fff;
        position: relative;
        .header-title-wrap{
          color: #2D2D2D;
          font-size: 16px !important;
          line-height: 1.8;
          font-weight:normal;
        }
        .del-btn{
            position: absolute;
            top:30px;
            right:10px;
            .icon-lajitong{
                font-size: 25px;
                color: #999;
                font-weight:normal;
            }
        }
        .tag-container{
          width: 85%;
          margin: 10px auto 0;
          text-align:left;
          font-size:10px !important;
          .tag-item {
            margin-top: 10px;
            display: inline-block;
            border: 1px solid #ccc;
            padding: 4px 12px;
            border-radius: 20px;
            margin-right: 6px;
            color: #666;
            font-weight:normal;
          }
        }
      }
    }
  
  }
  
  
`