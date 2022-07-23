import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
// createStore 쓰지 않기를 권고함
import thunk from "redux-thunk";
import item from './modules/user';
import { composeWithDevTools } from 'redux-devtools-extension';

// export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ item });
const store = createStore(rootReducer, composeWithDevTools(enhancer));
// const store = createStore(rootReducer, enhancer);

export default store;