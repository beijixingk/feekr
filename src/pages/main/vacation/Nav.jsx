import React, { Component } from 'react';
import { NavWrap } from './NavWrap.js'
import { get } from 'utils/http'
class Nav extends Component {
    state = {
        styleList : []
    }
    async componentDidMount(){
        let result = await get({
            url:'/feekr/vacation'
        })
        // console.log(result.result.style);
        this.setState({
            styleList : result.result.style
        })
    }
    render() {
        return (
            <NavWrap>
                {
                    this.state.styleList.map((value)=>(
                        <li key={value.id}>
                            <img src={'https://images.weserv.nl/?url='+value.icon} alt=""/>
                            <span>{value.name}</span>
                        </li>
                    ))
                }
                
                
            </NavWrap>
        );
    }
}

export default Nav;