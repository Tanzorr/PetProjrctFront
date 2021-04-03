import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import productReducer from "./product/product.reducer";
import userReducer from "./user/user.reducer";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    user: userReducer,
    product: productReducer,
    form: formReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
window.store = store;

export default store;
