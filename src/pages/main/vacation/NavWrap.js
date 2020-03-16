import styled from 'styled-components'

export const NavWrap = styled.div `
    width:100%;
    background:#fff;
    
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    padding-bottom:14px;
    li{
        margin-top:14px;
        text-align:center;
        list-style-type:none
        width:25%;
        img{
            display:inline-block;
            margin: 0 auto .018rem;
            width: .3413rem;
        }
        span{
            display:block;
            font-size:.10rem;
            font-weight:400;
            margin-top:.04rem;
            
        }
    }
`
export const SwiperWrap = styled.div `
    .am-wingblank.am-wingblank-lg {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

`
export const MainlistWrap = styled.div `
    .list1{
        display:flex;
        padding-left: 3%;
        padding-right: 3%;
        .common-search-entry-item {
            width: 32%;
            margin-right: 2%;
            text-align: center;
            font-size: .02rem;
            line-height: .05rem;
            img{
                width: 100%;
                height:auto;
            }
            .common-goods-content {
                font-weight: normal;
                margin-top: .08rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
                font-size: 11.8px;
                line-height:10px;
                color:#000;
                font{
                    vertical-align: inherit;
                }
            }
            .common-goods-price {
                color: rgb(26, 188, 156);
                font-size: 10px;
                line-height: 15px;
                margin-top: .05rem;
            }
        }
    }
    .list2{
        padding-left: 3%;
        padding-right: 3%;
        .theme-entry-item {
            margin-top: .045rem;
            overflow-x: hidden;
            border-bottom: .5px solid #e8e8e8;
            list-style: none;
            .theme-entry-link {
                width: 100%;
                margin-top: .038rem;
                .theme-entry-img {
                    width: 100%;
                    height: 120.4px;
                }
                .theme-entry-content {
                    margin:7.68px 0 16.2px;
                    text-indent: .02rem;
                    font-size:10px;
                    line-height: 15px;
                    font-weight:normal;
                    color:#000;
                }
            }
        }

    }
    .list3{
        padding-left: 3%;
        padding-right: 3%;
        ul{
            padding-bottom: 8px;
            .story-entry-item {
                margin-top: .03rem;
                padding-bottom: .024rem;
                border-bottom: 0.5px solid #e8e8e8;
                a{
                    display: flex;
                    width: 100%;
                    flex-direction:row;
                    img{
                        display:block;
                        width: 117.75px;
                        height:80px;
                        margin-right:14.93px;
                    }
                    div{
                        flex:1;
                        h3{
                            font-size: 12px;
                            line-height: 14px;
                            color: #2d2d2d;
                            font-weight:normal;
                        }
                        p{
                            font-size: 7px;
                            line-height: 30px;
                            color: #888;
                            font-weight:normal;
                        }
                    }
                }
            }
        }
    }
    .list4{
        display: flex;
        
        flex-wrap:wrap;
        
        padding-right: 2%;
        width:100%;
        justify-content: space-between;
        a{
            margin-left:2%;
            flex:1;
            padding-bottom: 14.9px;
            width: 48%;
            height:146px;
            font-size: .2rem;
            line-height: .35rem;
            text-align: center;
            img{
                display:block;
                width: 100%;
                height:92.5px;
            }
            h3{
                font-weight: normal;
                margin-top: 2px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:12px;
                color:#2d2d2d;
            }
            .common-goods-price{
                margin-top: -15px;
                font-size:12px;
            }
        }
    }
    .footer-box {
        padding-top: 13.2px;
        padding-bottom: 33px;
        margin-top: 11px;
        margin-bottom: 27.5px;
        font-size: 13.2px;
        text-align: center;
        color: #888;
        background-color: #fff;
        .footer-box-brand {
            width: 40%;
            margin: 0 auto;
            padding: 11px 0;
            border-bottom: 1px solid #e8e8e8;
            p{
                font-weight: 400;
                i{
                   
                    vertical-align: middle;
                    font-size: 58px;
                    line-height: 20px;
                    color: #000;
                    
                }
            }
            .footer-box-link {
                justify-content: center;
                line-height: .4rem;
            }
        }
        .footer-box-vcode {
            width: 70%;
            margin: 0 auto;
            padding-bottom: 16.5px;
            border-bottom: 1px dashed #e8e8e8;
            img {
                vertical-align: middle;
                margin: 16.5px auto;
                width: 110px;
            }
            p {
                line-height: 22px;
                font-size: 13.2px;
                text-align: center;
                color: #888;
                font-weight: normal;
            }
        }
        .footer-box-btns {
            display: flex;
            justify-content: center;
            margin-top: 16.5px;
            a {
                padding: 6.6px 18.7px;
                margin: 0 11px;
                font-size: 15.4px;
                border-radius: 15.2px;
                color: #fff;
                background-color: #1abc9c;
            }
        }

    }

`
export const MyWrap = styled.div `
    width:100%;
    height:100%;
    .mobile-login {
        display: block;
        box-sizing: border-box;
        padding: 20.48px 10.48px 0;
        min-height: 100%;
        width:100%;
        background-color: #fff;
        .mobile-login-info {
            position: relative;
            font-size: .11rem;
            line-height: .427rem;
            display: flex;
            font-weight: 400;
            input {
                padding-left: 8.54px;
                flex-grow: 1;
                cursor: pointer;
                overflow: visible;
                border:0px;
            }
            .base-color {
                color: #1abc9c!important;
                border-color: #1abc9c;
                position: absolute;
                display: inline-block;
                right: 0;
                top: 11px;
                padding-left: 11px;
                padding-right: 11px;
                line-height: 20.49px;
                border-radius: 2.56px;
                border-width: 1px;
                border-style: solid;
                background:#fff;
            }
        }
        .mobile-login-commit{
            button{
                display: block;
                margin-top: 12.38px;
                width: 100%;
                border-radius: 2.56px;
                font-size: 12.81px;
                line-height: 34px;
                text-align: center;
                color: #fff;
                background-color: #1abc9c;
                border: none;
                outline: none;
            }
        }
    }
`