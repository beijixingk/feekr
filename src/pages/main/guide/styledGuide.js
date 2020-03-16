import styled from 'styled-components'
// import border from 'components/styled/border'

export const Recommend = styled.div  `
    .header-title-wrap {
        color: #2D2D2D;
        padding: .15rem 0;
        line-height: 1.8;
        font-size: 16px !important;
        text-align:center;
        font-weight:normal;
    }
    .item-container{
        border-bottom: .5px solid #F6F6F6;
        padding:0 10px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        .item {
            display: block;
            width: 48.5%;
            margin-bottom: .15rem;
            line-height: 1.8;
            img{
                max-height: .9rem;
                width: 100%;
                display:block;
                
            }
            .item-title{
                color: #2D2D2D;
                padding: .05rem 0 0;
                font-size: .14rem !important;
                text-align: center;
                font-weight:normal;
            }
            .city-desc {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #666;
                font-size: .12rem !important;
                text-align: center;
                font-weight:normal;
            }
        }
        a:nth-child(2n){
            margin-left:3%;
        }
    }


`
export const AreaList = styled.div `
    background: #fff;
    margin-top: .1rem;
    .item-container{
        padding: .1rem;
        .header-title-wrap {
            color: #2D2D2D;
            padding: .15rem 0;
            line-height: 1.8;
            .regular-font{
                font-size: .16rem !important;
                color: #2D2D2D;
                line-height: 1.8;
                text-align: center;
                font-weight:normal;
                display:block;
            }
            .font-sm {
                font-size: .12rem !important;
                color: #666;
                text-align: center;
                font-weight:normal;
            }
        }
        .main-item{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:100%;
            .item {
                display: block;
                width: 31%;
                margin-right: 2%;
                margin-left: 0;
                margin-bottom: .15rem;
                line-height: 1.8;
                img{
                    max-height: .9rem;
                    display: block;
                    width: 100%;
                }
                .item-title{
                    color: #2D2D2D;
                    padding: .05rem 0 0;
                    font-weight:normal;
                    text-align: center;
                    font-size: .14rem !important;
                
                }
            }
        }
        
    }
`