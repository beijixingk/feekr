import styled from 'styled-components'
import border from 'components/styled/border'
export const SearchWrap = styled.div `
    width:100%;
    background: ${props=>props.bc || '#F6F6F6'};
    padding:${props=>props.padding || 0};
`
export const InputWrap = border(
    styled.div `
    margin:${props=>props.margin || '10px'};
    width:calc(100%-2px) ;
    height:${props=>props.height || '.367rem'};
    background: ${props=>props.backgroundColor || '#fff'};
    display:flex;
    flex-direction:row;
    color:#888;
    font-weight:normal;
    div{
        margin:0 auto;
        display:flex;
        flex-direction:row;
        
        i{
            
            font-size:13px;
            line-height:${props=>props.height || '.367rem'};
        }
        span{
            display:block;
            height:${props=>props.height || '.367rem'};
            text-align:center;
            line-height:${props=>props.height || '.367rem'};
            font-size:0.12rem;
            color:#888;
            margin-left:.03rem;
            font-weight:normal;
        }
    }
    
`) 