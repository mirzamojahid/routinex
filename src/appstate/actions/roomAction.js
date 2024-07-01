import { BUILDING_ROOM, FLOOR_ROOM, ROOM_ADD_POPUP_DISABLE, ROOM_ADD_POPUP_ENABLE, ROOM_LIST, ROOM_SELECTED, SELECTED_DAY_ROOM, SELECTED_TYPE_ROOM } from "../constants/appConstants"


export const roomlistAction = (value) => {
    return {
        type: ROOM_LIST,
        playload: value
    }
}



export const roomSelectedAction = (value) => {
    return {
        type: ROOM_SELECTED,
        playload: value
    }
}

export const buildingRoomAction = (value) => {
    return {
        type: BUILDING_ROOM,
        playload: value
    }
}


export const floorRoomAction = (value) => {
    return {
        type: FLOOR_ROOM,
        playload: value
    }
}

export const daySelectedRoomAction = (value) => {
    return {
        type: SELECTED_DAY_ROOM,
        playload: value
    }
}


export const selectedTypeRoomAction = (value) => {
    return {
        type: SELECTED_TYPE_ROOM,
        playload: value
    }
}


export const addPopupEnableRoomAction = (value) => {
    return {
        type: ROOM_ADD_POPUP_ENABLE,
    }
}


export const addPopupDisableRoomAction = (value) => {
    return {
        type: ROOM_ADD_POPUP_DISABLE,
    }
}

