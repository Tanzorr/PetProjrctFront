import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import productReducer from "./product/product.reducer";

const reducers = combineReducers({
    product: productReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
window.store = store;

export default store;
