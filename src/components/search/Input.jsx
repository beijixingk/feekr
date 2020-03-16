import React, { Component } from 'react';
import { InputWrap} from './SearchWrap'
class Input extends Component {
    render() {
        return (
            <InputWrap>
                <i className="iconfont icon-sousuo"></i>
                <span>搜索目的地/攻略/旅行资讯</span>
            </InputWrap>
        );
    }
}

export default Input;