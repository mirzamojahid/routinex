import { DRAWER_OPEN, DRAWER_CLOSE, GENERATE_SELECT_FACULTY, GENERATE_DESELECT_FACULTY, GENERATE_FACULTY_REMOVE_OFFERED, GENERATE_FACULTY_OFFERED, GENERATE_FACULTY_LIST, GENERATE_NEXT_ENABLE, GENERATE_NEXT_DISABLE, GENERATE_EDIT_ENABLE, GENERATE_EDIT_DISABLE, GENERATE_ADD_ENABLE, GENERATE_ADD_DISABLE } from "../constants/appConstants";
import { generateState, drawerState } from "../states/appStates";


export const drawerReducer = (state = drawerState, action) => {

    switch (action.type) {
        case DRAWER_OPEN:
            return {
                isOpen: true
            }
        case DRAWER_CLOSE:
            return {
                isOpen: false
            }
        default:
            return state;
    }

}



export const generateReducer = (state = generateState, action) => {

    switch (action.type) {

        case GENERATE_SELECT_FACULTY:
            return {
                ...state,
                activeTeacher: action.playload
            }
        case GENERATE_DESELECT_FACULTY:
            return {
                ...state,
                activeTeacher: null,
            }
        case GENERATE_FACULTY_OFFERED:
            return {
                ...state,
                offered: action.playload
            }
        case GENERATE_FACULTY_REMOVE_OFFERED:

            const courses = state.offered.filter(course => course !== action.playload);

            return {
                ...state,
                offered: courses
            }
        case GENERATE_FACULTY_LIST:
            return {
                ...state,
                faculty: action.playload,
            }
        case GENERATE_NEXT_ENABLE:
            return {
                ...state,
                next: true,
            }
        case GENERATE_NEXT_DISABLE:
            return {
                ...state,
                next: false,
            }
        case GENERATE_EDIT_ENABLE:
            return {
                ...state,
                edit: true,
            }
        case GENERATE_EDIT_DISABLE:
            return {
                ...state,
                edit: false,
            }

        case GENERATE_ADD_ENABLE:
            return {
                ...state,
                add: true,
            }
        case GENERATE_ADD_DISABLE:
            return {
                ...state,
                add: false,
            }
        default:
            return state;
    }

}
