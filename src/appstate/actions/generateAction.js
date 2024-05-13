import { GENERATE_ADD_DISABLE, GENERATE_ADD_ENABLE, GENERATE_DESELECT_FACULTY, GENERATE_EDIT_DISABLE, GENERATE_EDIT_ENABLE, GENERATE_FACULTY_OFFERED, GENERATE_FACULTY_REMOVE_OFFERED, GENERATE_NEXT_DISABLE, GENERATE_NEXT_ENABLE, GENERATE_SELECT_FACULTY } from "../constants/appConstants"


export const generateSelectFacultyAction = (value) => {
    return {
        type: GENERATE_SELECT_FACULTY,
        playload: value
    }
}


export const generateDeselectFacultyAction = () => {
    return {
        type: GENERATE_DESELECT_FACULTY

    }
}

export const generateFacultyOfferedAction = (value) => {
    return {
        type: GENERATE_FACULTY_OFFERED,
        playload: value

    }
}

export const generateFacultyRemoveOfferedAction = (value) => {
    return {
        type: GENERATE_FACULTY_REMOVE_OFFERED,
        playload: value
    }
}

export const generateNextEnableAction = () => {
    return {
        type: GENERATE_NEXT_ENABLE
    }
}

export const generateNextDisableAction = () => {
    return {
        type: GENERATE_NEXT_DISABLE
    }
}

export const generateOfferedEditEnableAction = () => {
    return {
        type: GENERATE_EDIT_ENABLE
    }
}

export const generateOfferedEditDisableAction = () => {
    return {
        type: GENERATE_EDIT_DISABLE
    }
}

export const generateOfferedAddEnableAction = () => {
    return {
        type: GENERATE_ADD_ENABLE
    }
}

export const generateOfferedAddDisableAction = () => {
    return {
        type: GENERATE_ADD_DISABLE
    }
}

