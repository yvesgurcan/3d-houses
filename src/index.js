import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Menu3D from './views/Menu3D';
import Menu1 from './views/Menu1';

const rootElement = document.getElementById('root');
const customHistory = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={customHistory}>
        <Route
            component={({ history }) => {
                // reconcile React Router history by making it available globally in the 3D menu
                window.appHistory = history;
                return <Menu3D />;
            }}
        />
        <Switch>
            <Route path="/menu1" component={Menu1} />
        </Switch>
    </HashRouter>,
    rootElement
);