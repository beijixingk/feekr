import React, { Component } from 'react';
import { ListMoreWrap } from './ListWrap'
class ListMore extends Component {
    render() {
        return (
            <ListMoreWrap
                {...this.props}
                
                    >{this.props.moreTitle}</ListMoreWrap>
        );
    }
}

export default ListMore;