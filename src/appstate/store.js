
import { createStore, combineReducers } from 'redux';
import {  drawerReducer, generateReducer } from './reducers/appReducers';
import { roomReducer } from './reducers/roomReducers';
import { sectionReducer } from './reducers/sectionReducers';
import { teacherReducer } from './reducers/teacherReducers';


const rootReducers = combineReducers({
    drawer: drawerReducer,
    generate:generateReducer,
    room:roomReducer,
    section:sectionReducer,
    teacher:teacherReducer
})

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;