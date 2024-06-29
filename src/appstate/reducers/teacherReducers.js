import { TEACHER_DEPARTMENT, TEACHER_LIST, TEACHER_SELECTED } from "../constants/appConstants";
import {  teacherState } from "../states/appStates";


export const teacherReducer = (state = teacherState, action) => {

    switch (action.type) {
        case TEACHER_LIST:
            return {
                ...state,
                teacher_list: action.playload
            }
        case TEACHER_SELECTED:
            return {
                ...state,
                teacher_selected: action.playload
            }
  

        case TEACHER_DEPARTMENT:
            return {
                ...state,
                teacher_department: action.playload
            }

        default:
            return state;
    }

}
