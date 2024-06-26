import { BUILDING_ROOM, FLOOR_ROOM, ROOM_LIST, ROOM_SELECTED, SELECTED_DAY_ROOM, SELECTED_TYPE_ROOM } from "../constants/appConstants";
import { roomState } from "../states/appStates";


export const roomReducer = (state = roomState, action) => {

    switch (action.type) {
        case ROOM_LIST:
            return {
                ...state,
                room: action.playload
            }
        case ROOM_SELECTED:
            return {
                ...state,
                selected: action.playload
            }
        case BUILDING_ROOM:
            return {
                ...state,
                building_selected: action.playload
            }
        case FLOOR_ROOM:
            return {
                ...state,
                floor_selected: action.playload
            }
        case SELECTED_DAY_ROOM:
            return {
                ...state,
                day_selected: action.playload
            }
            case SELECTED_TYPE_ROOM:
                return {
                    ...state,
                    room_type: action.playload
                }
    
        default:
            return state;
    }

}
