import { SECTION_DEPARTMENT, SECTION_LIST, SECTION_SELECTED, SECTION_SEMESTER } from "../constants/appConstants";
import { sectionState } from "../states/appStates";


export const sectionReducer = (state = sectionState, action) => {

    switch (action.type) {
        case SECTION_LIST:
            return {
                ...state,
                section_list: action.playload
            }
        case SECTION_SELECTED:
            return {
                ...state,
                section_selected: action.playload
            }
        case SECTION_SEMESTER:
            return {
                ...state,
                section_semester: action.playload
            }

        case SECTION_DEPARTMENT:
            return {
                ...state,
                section_department: action.playload
            }

        default:
            return state;
    }

}
