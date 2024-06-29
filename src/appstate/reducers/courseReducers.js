import { COURSE_DEPARTMENT, COURSE_LIST, COURSE_OFFERED, COURSE_SELECTED, COURSE_SEMESTER } from "../constants/appConstants";
import { courseState } from "../states/appStates";


export const courseReducer = (state = courseState, action) => {

    switch (action.type) {
        case COURSE_LIST:
            return {
                ...state,
                course_list: action.playload
            }
        case COURSE_SELECTED:
            return {
                ...state,
                course_selected: action.playload
            }

        case COURSE_DEPARTMENT:
            return {
                ...state,
                course_department: action.playload
            }
        case COURSE_OFFERED:
            return {
                ...state,
                course_offered: action.playload
            }
        
        case COURSE_SEMESTER:
            return {
                ...state,
                course_semester: action.playload
            }

        default:
            return state;
    }

}
