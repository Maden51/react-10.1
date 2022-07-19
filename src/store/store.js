import { combineReducers, createStore } from "redux";
import ServiceAddReducer from "../reducers/ServiceAdd";
import ServiceFilterReducer from "../reducers/ServiceFilter";
import ServiceListReducer from "../reducers/ServiceList";

const reducer = combineReducers({
    serviceList: ServiceListReducer,
    serviceAdd: ServiceAddReducer,
    serviceFilter: ServiceFilterReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;