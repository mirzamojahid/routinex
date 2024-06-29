import { ROUTINE_DEPARTMENT, ROUTINE_LIST } from "../constants/appConstants";
import {  routineState } from "../states/appStates";


export const routineReducer = (state = routineState, action) => {

    switch (action.type) {
        case ROUTINE_LIST:
            return {
                ...state,
                routine_list: action.playload
            }


        case ROUTINE_DEPARTMENT:
            return {
                ...state,
                routine_department: action.playload
            }

        default:
            return state;
    }

}
