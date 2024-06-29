import { COURSE_DEPARTMENT, COURSE_LIST, COURSE_SELECTED, COURSE_SEMESTER } from "../constants/appConstants"



export const courselistAction = (value) => {
    return {
        type: COURSE_LIST,
        playload: value
    }
}



export const courseSelectedAction = (value) => {
    return {
        type: COURSE_SELECTED,
        playload: value
    }
}



export const courseDepartmentAction = (value) => {
    return {
        type: COURSE_DEPARTMENT,
        playload: value
    }
}


export const courseSemesterAction = (value) => {
    return {
        type: COURSE_SEMESTER,
        playload: value
    }
}
export const facultyDepartmentAction = (value) => {
    return {
        type: COURSE_DEPARTMENT,
        playload: value
    }
}



