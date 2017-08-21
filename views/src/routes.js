import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ViewItem from './containers/show_list_item';

import Header from './components/header';
import Main from './components/Main';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
            <Route path="/plans" component={Header}></Route>
            <Route path="/store" component={Header}></Route>
        </Route>

    </Router>
)
