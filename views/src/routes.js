import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ViewItem from './containers/show_list_item';

import Header from './components/header';
import Main from './components/Main';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
            <Route path="/plans" component={Main}></Route>
            <Route path="/store" component={Main}></Route>
        </Route>

    </Router>
)
