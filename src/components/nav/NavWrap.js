import styled from 'styled-components'

export const NavWrap = styled.div `
    width:100%;
    height:.89rem;
    background:#fff;
    padding:15px 0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    
    li{
        flex:1;
        text-align:center;
        list-style-type:none
        width:100%;
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
        }
    }
`