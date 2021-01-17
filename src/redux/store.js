import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducr from './root-reducer';
const middlewares = [logger];
const  store = createStore(rootReducr, applyMiddleware(...middlewares));

export default store;