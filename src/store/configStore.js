/**
 * Created by mobiloitte on 07/07/17.
 */
import { createStore,applyMiddleware} from 'redux';
import {  routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import reducers from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState) {
    const history = createHistory();
    const middleware = routerMiddleware(history);
    if(process.env.NODE_ENV === 'development') {
        return createStore(reducers,
            composeWithDevTools(applyMiddleware(middleware, logger)), initialState);
    }else {
        return createStore(reducers,
           applyMiddleware(middleware), initialState);
    }
}