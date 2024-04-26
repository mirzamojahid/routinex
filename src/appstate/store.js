
import { createStore, combineReducers } from 'redux';
import {  drawerReducer } from './reducers/appReducers';

const rootReducers = combineReducers({
    drawer: drawerReducer,
})

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;