import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './sear.css'

export default (Search)=>{
  const SearchAnimate = props =>{
    return (
      <CSSTransition
        in={true}
        timeout={1000}
        classNames='my-node'
      >
        <Search {...props}></Search>
      </CSSTransition>
    )
  }
  return SearchAnimate
}

