import React from 'react';
import Layout from './pages/main/Layout'
import {VacaLay ,Vacamy,News,Search} from 'pages/main/index'
import { Provider } from 'react-redux'
import store from './store/'
import './assets/reset.css'
// import 'assets/yo/usage/core/reset.scss';
import 'assets/icon/iconfont.svg'
import 'assets/icon/iconfont2.css'
import 'assets/icon/iconfont.css'
import 'assets/icon/iconfont.woff'
import { BrowserRouter as Router } from 'react-router-dom'
import New from 'pages/more/New'
import SearchResult from './pages/more/SearchResult'

import { Switch,Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
        {/* <Layout></Layout> */}
          <Route 
            path='/news'
            component={New}
          />
          <Route 
            path='/vacation'
            component={VacaLay}
          />
          <Route 
            path='/vmy'
            component={Vacamy}
          />
          <Route 
            path='/morenews'
            component={News}
          />
          <Route
            path='/search_result'
            component={SearchResult}
          />
          <Route 
            path='/search'
            component={Search}
          />
          
          <Route 
            path='/'
            component={Layout}
          />
          
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
