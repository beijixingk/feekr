import React, { Component } from 'react';
import { MyWrap } from './NavWrap'

class Vacamy extends Component {
  render() {
    return (
      <MyWrap>
        <section className="mobile-login">
          <p className="mobile-login-info common-text-grow">
            手机号
            <input 
              placeholder="仅支持中国大陆手机号" 
              type="tel" 
              className="mobile-login-tel"
            />
          </p>
          <p className='mobile-login-info common-text-grow'>
            验证码
            <input 
              type="number"
              placeholder="请输入验证码" 
              />
            <button className="base-border-color base-color mobile-login-code">
              获取验证码
            </button>
          </p>
          <p className='mobile-login-commit'>
            <button>登录</button>
          </p>
        </section>
      </MyWrap>
    );
  }
}

export default Vacamy;