import { TEACHER_DEPARTMENT, TEACHER_LIST, TEACHER_SELECTED } from "../constants/appConstants"


export const teacherlistAction = (value) => {
    return {
        type: TEACHER_LIST,
        playload: value
    }
}



export const teacherSelectedAction = (value) => {
    return {
        type: TEACHER_SELECTED,
        playload: value
    }
}

export const facultyDepartmentAction = (value) => {
    return {
        type: TEACHER_DEPARTMENT,
        playload: value
    }
}



