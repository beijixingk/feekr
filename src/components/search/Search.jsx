import React, { Component } from 'react';
import { SearchWrap,InputWrap } from './SearchWrap'
import { withRouter } from 'react-router-dom'


import './sear.css'

@withRouter
class Search extends Component {
    // state = {
    //     flag:true
    // }
    // handleClick = (props) => {
    //     console.log(this.props,props);
    //     this.setState((state)=>{
    //        return {
    //         flag: !state.flag
    //        }
    //     })
    //     // if(this.props.href){
    //     //     this.props.history.push({
    //     //         pathname:'/search',
    //     //         state:{flag:this.state.flag}
    //     //     })
    //     // }
        
    // }

    render() {
        // console.log({...this.props})
        return (
            // <CSSTransition
            // in={this.state.flag}
            // timeout={1000}
            // classNames='my-node'
            // >
            <SearchWrap
            {...this.props}
            >
                <InputWrap
                {...this.props}
                >
                    <div>
                        <i className="iconfont icon-sousuo"></i>
                        <span>{this.props.placeholder}</span>
                    </div>
                </InputWrap>
            {/* <div>aaaaaaa</div> */}
            </SearchWrap>
            // </CSSTransition>
        )
        
        
    }
}

export {
    SearchWrap,
    InputWrap,
    Search as default
};