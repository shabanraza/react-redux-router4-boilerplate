This project was bootstrapped with [Create React App , Redux and router v4](https://github.com/facebookincubator/create-react-app).
and also included [react-Bootstrap].


### Development dependency
I have used yarn instead of npm if you dont have yarn install it from below command

``` 
npm install -g yarn 
```

### Installation
First you need to clone from below url in your project directory


```
$ git clone https://github.com/shabanraza/react-redux-router4-boilerplate.git

$ cd creact-redux-router4-boilerplate/

$ yarn install
```


After installing all dependency hit below command

```
$ yarn start
```

Now project is running at http://localhost:3000  :+1:

### Use yarn instead of npm

```
$ yarn add modulename instead of npm install modulename
```

### how to use localStorage with redux-store (synchronization between redux-store and localStorage) using redux-replicate-localforage module

 Do you want to use **localStorage** with redux state so whenever action dispatches it will update the redux store as well as localStorage state
or

you can save any reducer state even any property of state in localStoarge so that it will sync with redux store and always get the updated state in your component
>  Go to project  directory inside src folder
   open src/index.js in your favroute editor see how state are persisted.
```javascript
    
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


```

We are using  redux-replicate-localforage module for localstorage so that we could pass the initialstate to redux store

