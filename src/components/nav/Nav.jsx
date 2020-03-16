import React, { Component } from 'react';
import { NavWrap } from './NavWrap.js'
import gonglve from 'assets/images/gonglve.png'
import dujia from 'assets/images/dujia.png'
import huwai from 'assets/images/huwai.png'
import meiwu from 'assets/images/meiwu.png'
import yanjiusuo from 'assets/images/yanjiusuo.png'
class Nav extends Component {
    render() {
        return (
            <NavWrap>
                <li>
                    <img src={gonglve} alt=""/>
                    <span>攻略</span>
                </li>
                <li>
                    <img src={dujia} alt=""/>
                    <span>度假</span>
                </li>
                <li>
                    <img src={huwai} alt=""/>
                    <span>玩乐</span>
                </li>
                <li>
                    <img src={meiwu} alt=""/>
                    <span>美物</span>
                </li>
                <li>
                    <img src={yanjiusuo} alt=""/>
                    <span>研究所</span>
                </li>
            </NavWrap>
        );
    }
}

export default Nav;