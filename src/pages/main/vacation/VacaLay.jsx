import { TabBar } from 'antd-mobile';
import React from 'react'

import Vacation from './Vacation'

import { Switch,Route,withRouter } from 'react-router-dom'

@withRouter
class Layout extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    
    this.state = {
      selectedTab:'vacation',
      hidden: false,
      fullScreen: true,
    };
  }
  componentWillReceiveProps(props){
    console.log(props);
    if(props.location.state!==undefined){
      this.setState({
         selectedTab: props.location.state
      })
    }
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0,fontWeight:700,fontSize:'10px' } : { height: 400 }}>
      <Switch>
        <TabBar
          unselectedTintColor="#888"
          tintColor="#1abc9c"
          barTintColor="rgba(238,238,238,0.98)"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="vacation"
            icon={<div className="iconfont icon-shouyepressed" style={{
              fontSize:'24px',
              lineHeight:'0 !important',
              marginTop:'-5px',
              marginBottom:'-7px'
            }}
            />
            }
            selectedIcon={<p className="iconfont icon-shouyepressed" style={{
              fontSize:'24px',
              lineHeight:'0 !important',
              marginTop:'-5px',
              marginBottom:'-7px'
              }}
            />
            }
            selected={this.state.selectedTab === 'vacation'}
            onPress={() => {
              this.setState({
                selectedTab: 'vacation',
              });
              this.props.history.push('/vacation')
            }}
            
          >
           
             <Route   
            
            path='/vacation' 
            render={
              (props)=>(
            <Vacation  {...props}></Vacation>
              )
            } />   
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-wodenormal" style={{
                fontSize:'24px',
                lineHeight:'0 !important',
                marginTop:'-5px',
                marginBottom:'-7px'
                
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-wodenormal" style={{
                fontSize:'24px',
              lineHeight:'0 !important',
              marginTop:'-5px',
              marginBottom:'-7px'
                }}
              />
            }
            title="我的"
            key="vmy"
            selected={this.state.selectedTab === 'vmy'}
            onPress={() => {
              this.setState({
                selectedTab: 'vmy',
              });
              console.log('aaa');
              
              this.props.history.push('/vmy')

            }}
          >
           
          </TabBar.Item>
        </TabBar>
      </Switch>
        
      </div>
      
    );
  }
}


// ReactDOM.render(<TabBarExample />, mountNode);


export {
  Layout as default
}

