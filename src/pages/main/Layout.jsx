import { TabBar } from 'antd-mobile';
import React from 'react'
import Home from './home/Home'
import Guide from './guide/Guide'
import My from './my/My'
import { Switch,Route, Redirect,withRouter } from 'react-router-dom'

@withRouter
class Layout extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    
    this.state = {
      selectedTab:'home',
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
    }else{
      this.setState({
        selectedTab: props.location.pathname.slice(1)
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
            key="Home"
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
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
              this.props.history.push('/home')
            }}
            
          >
           
             <Route   
            
            path='/home' 
            render={
              (props)=>(
            <Home  {...props}></Home>
              )
            } />   
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-0040dujia" style={{
                fontSize:'24px',
                lineHeight:'0 !important',
                marginTop:'-5px',
                marginBottom:'-7px'
                
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-0040dujia" style={{
                fontSize:'24px',
              lineHeight:'0 !important',
              marginTop:'-5px',
              marginBottom:'-7px'
                }}
              />
            }
            title="度假"
            key="vacation"
            selected={this.state.selectedTab === 'vacation'}
            onPress={() => {
              this.setState({
                selectedTab: 'vacation',
              });
              this.props.history.push('/vacation')

            }}
          >
           {/* <Vacation></Vacation> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-gongluenormal" style={{
                fontSize:'24px',
              lineHeight:'0 !important',
              marginTop:'-5px',
              marginBottom:'-7px'
                 }}
                
              />
            }
            selectedIcon={
              <div className="iconfont icon-gongluenormal" style={{
                  fontSize:'24px',
                lineHeight:'0 !important',
                marginTop:'-5px',
                marginBottom:'-7px'
                 }}

                 
              />
            }
            title="攻略"
            key="guide"
            selected={this.state.selectedTab === 'guide'}
            onPress={() => {
              this.setState({
                selectedTab: 'guide',
              });
              this.props.history.push('/guide')
              // console.log(ti);
              
            }}

            

          >
           
            <Route   
            
            path='/guide' 
            render={
              (props)=>(
            <Guide {...props}></Guide>
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
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
           
            
            <My></My>
          </TabBar.Item>
        </TabBar>
       
   
        {/* <Route exact  path='/guide' component={Guide} />  */}
        
        </Switch>
        <Redirect 
          from='/'
          to='/home'
        />
      </div>
      
    );
  }
}


// ReactDOM.render(<TabBarExample />, mountNode);


export {
  Layout as default
}

