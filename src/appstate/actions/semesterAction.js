import { SEMESTER_ADD_POPUP_DISABLE, SEMESTER_ADD_POPUP_ENABLE, SEMESTER_LIST } from "../constants/appConstants"


export const semesterlistAction = (value) => {
    return {
        type: SEMESTER_LIST,
        playload: value
    }
}



export const addPopupEnableSemesterAction = () => {
    return {
        type: SEMESTER_ADD_POPUP_ENABLE,
    }
}


export const addPopupDisableSemesterAction = () => {
    return {
        type: SEMESTER_ADD_POPUP_DISABLE,
    }
}

