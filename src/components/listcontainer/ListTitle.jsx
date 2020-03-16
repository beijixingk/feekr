import React, { Component } from 'react';
import { ListTitleWrap} from './ListWrap'
class ListTitle extends Component {
    render() {
        return (
            <ListTitleWrap
            width={this.props.width}
            dir={this.props.dir}
            color={this.props.color}
            >
                <span className="header-line"></span> 
                <span className="header-title">{this.props.title}</span> 
                <span className="sub-title">{this.props.subTitle}</span> 
            </ListTitleWrap>
        );
    }
}

export default ListTitle;