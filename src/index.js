import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter  } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route ,Switch} from 'react-router';
import configureStore from './store/configStore';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

// import './libs/bootstrap.min.css';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route component={App} />
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>

        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
