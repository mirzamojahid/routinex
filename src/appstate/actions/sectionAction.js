import {  SECTION_DEPARTMENT, SECTION_LIST, SECTION_SELECTED, SECTION_SEMESTER} from "../constants/appConstants"


export const sectionlistAction = (value) => {
    return {
        type: SECTION_LIST,
        playload: value
    }
}

export const sectionSemesterAction = (value) => {
    return {
        type: SECTION_SEMESTER,
        playload: value
    }
}



export const sectionSelectedAction = (value) => {
    return {
        type: SECTION_SELECTED,
        playload: value
    }
}

export const sectionDepartmentAction = (value) => {
    return {
        type: SECTION_DEPARTMENT,
        playload: value
    }
}



