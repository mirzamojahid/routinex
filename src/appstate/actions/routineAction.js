import { ROUTINE_DEPARTMENT, ROUTINE_LIST } from "../constants/appConstants"


export const routinelistAction = (value) => {
    return {
        type: ROUTINE_LIST,
        playload: value
    }
}



export const routineDepartmentAction = (value) => {
    return {
        type: ROUTINE_DEPARTMENT,
        playload: value
    }
}



