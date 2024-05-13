
import { createStore, combineReducers } from 'redux';
import {  drawerReducer, generateReducer } from './reducers/appReducers';

const rootReducers = combineReducers({
    drawer: drawerReducer,
    generate:generateReducer,
})

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;