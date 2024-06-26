
import { createStore, combineReducers } from 'redux';
import {  drawerReducer, generateReducer } from './reducers/appReducers';
import { roomReducer } from './reducers/roomReducers';

const rootReducers = combineReducers({
    drawer: drawerReducer,
    generate:generateReducer,
    room:roomReducer,
})

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;