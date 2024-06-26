
import { createStore, combineReducers } from 'redux';
import {  drawerReducer, generateReducer } from './reducers/appReducers';
import { roomReducer } from './reducers/roomReducers';
import { sectionReducer } from './reducers/sectionReducers';

const rootReducers = combineReducers({
    drawer: drawerReducer,
    generate:generateReducer,
    room:roomReducer,
    section:sectionReducer
})

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;