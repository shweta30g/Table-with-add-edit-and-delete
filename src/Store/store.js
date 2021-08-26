import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../Redux/Reducer";
import { watcherSaga } from "../Saga/rootSaga";
import logger from 'redux-logger';

const reducer = combineReducers({
  user: userReducer,
 
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
middleware.push(logger);
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
