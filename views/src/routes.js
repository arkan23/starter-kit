import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ViewItem from './containers/show_list_item';

import Header from './components/header';
import Main from './components/Main';
import Label from './components/Label';
import Automenu from './components/Automenu';
import Orders from './components/Orders';


export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
            <Route path="/plans" component={Header}></Route>
            <Route path="/store" component={Header}></Route>
        </Route>
        <Route path="/salex" component={Label}></Route>
        <Route path="/automenu" component={Automenu}></Route>
        <Route path="/orders" component={Orders}></Route>

    </Router>
)
