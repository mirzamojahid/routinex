import { DRAWER_OPEN, DRAWER_CLOSE, ROUTINE_GENERATE_ASSIGN, ROUTINE_GENERATE_COURSE, ROUTINE_GENERATE_FACULTY, ROUTINE_GENERATE_SECTION } from "../constants/appConstants";
import { generateState, drawerState, routineGetState } from "../states/appStates";


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
