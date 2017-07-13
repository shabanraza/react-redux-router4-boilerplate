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





/******
 *
 *
 * We are using localStoarge sync with redux store you can save any reducer state in localStoarge even any propetry of that state and
 * you will get the always updated state form localStorage ,
 *
 * whenever action dispatched then localStoarge and store will be update autometically you dont need to use localStoarge in your component
 * just map the state with component
 *
 *
 *
 *

 *****/




export const loadState = () =>{
    try {
        const  data = localStorage.getItem('state');
        if(data === null){
            return undefined;
        }
        return JSON.parse(data);
    } catch (err) {
        return undefined;

    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem('state',JSON.stringify(state))
    } catch (err) {

    }
}

const persistedState = loadState();
const store = configureStore(persistedState);


/********
 * 
 * 
 *  In store.subscribe method you can save as many reducer state like below
 *
         store.subscribe(()=>{
            saveState({
                reducerKey : store.getState().reducerKey
            });
          })
 
 
 ********/

store.subscribe(()=>{
    saveState({
        user: store.getState().user
    });
})

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
