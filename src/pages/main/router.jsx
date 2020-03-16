import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import { Guide } from './index'
class router extends Component {
    render() {
        return (

            <Switch>
                <Route 
                    path='/guide'
                    component={Guide}
                />
            </Switch>
        );
    }
}

export default router;