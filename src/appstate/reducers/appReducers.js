import { DRAWER_OPEN, DRAWER_CLOSE, GENERATE_SELECT_FACULTY, GENERATE_DESELECT_FACULTY, GENERATE_FACULTY_REMOVE_OFFERED, GENERATE_FACULTY_OFFERED, GENERATE_FACULTY_LIST, GENERATE_NEXT_ENABLE, GENERATE_NEXT_DISABLE } from "../constants/appConstants";
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
            console.log(434343);
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
            return {
                ...state,
                offered: []
            }
        case GENERATE_FACULTY_LIST:
            return {
                ...state,
                faculty: [],
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
        default:
            return state;
    }

}
