import { SEMESTER_ADD_POPUP_DISABLE, SEMESTER_ADD_POPUP_ENABLE, SEMESTER_LIST } from "../constants/appConstants";
import { semesterState } from "../states/appStates";


export const semesterReducer = (state = semesterState, action) => {

    switch (action.type) {
        case SEMESTER_LIST:
            return {
                ...state,
                semester_list: action.playload
            }


        case SEMESTER_ADD_POPUP_ENABLE:
            return {
                ...state,
                addPopup: true
            }


        case SEMESTER_ADD_POPUP_DISABLE:
            return {
                ...state,
                addPopup: false
            }

        default:
            return state;
    }

}
