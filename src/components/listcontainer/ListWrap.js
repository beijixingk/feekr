import styled from 'styled-components'
import border from 'components/styled/border'
export const ListWrap =border(
    styled.div `
    margin-top:.11rem;
    background: #fff;
    .list{
        padding: .14rem .11rem 0;
        .firstItem{
            margin-top: 0 !important;
            padding-top: 0 !important;
        }
    }
    
`
) 
export const ListTitleWrap =  border(
    styled.div `
    padding: .2rem .11rem;
    .header-line{
        border-left: 3px solid #1ABC9C;
        vertical-align: middle;
    }
    .header-title{
        padding: 0 .1rem;
        font-size:.18rem;
        font-weight:normal;
    }
    .sub-title {
        font-weight:normal;
        color: #999;
        font-size:.1rem;
    }
    
`
)
export const SubTitleWrap = border(
    styled.div `
        padding:.11rem;
        font-weight:normal;
        display:flex;
        flex-direction:row;
        padding-bottom:.1rem;
        align-items: center;
        .font-md{
            font-size:${props=>props.size || '.14rem'};
        }
        .line{
            border: .5px solid #F6F6F6;
            margin: 0 .05rem;
            flex:1
        }
        a{
            color: #1ABC9C;
            font-size:${props=>props.size || '.14rem'};
        }
    `
)
export const ListItem = border(
    styled.div `
    margin-top: .11rem;
    padding-top: .11rem;
        
    a{
        display:flex;
        flex-direction:row;
        width: 100%;
        height:.72rem;
        color:#000;
        font-weight:normal;
        img{
            width: .72rem;
            height: .72rem;
            display:block;
        }
        .news-item {
            margin-left: .24rem;
            width:2.02rem;
            .news-title{
                margin-bottom: .08rem;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size:.14rem;
                font-weight:normal;
                height:.39rem;
                margin-top:.03rem;
            }
            .separate{
                margin-left:.1rem;
                margin-right:.1rem;
            }
        }
        
    }
    
`
)

export const ListMoreWrap = border(
    styled.a `
        color: #1ABC9C;
        display: block;
        font-size: .14rem;
        text-align:center;
        font-weight:normal;
        line-height: .6rem;
        height:.6rem;
    `
)