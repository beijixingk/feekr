import React, { Component } from 'react';
import { SubTitleWrap } from './ListWrap'
class SubTitle extends Component {
    render() {
        return (
            <SubTitleWrap
            {...this.props}
            >
                <div className="font-md">{this.props.title}</div> 
                <div className="line"></div>  
                <a href='/'>更多</a>  
            </SubTitleWrap>
        );
    }
}

export default SubTitle;