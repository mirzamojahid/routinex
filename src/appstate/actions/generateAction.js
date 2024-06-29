import { GENERATE_ADD_DISABLE, GENERATE_ADD_ENABLE, GENERATE_DESELECT_FACULTY, GENERATE_EDIT_DISABLE, GENERATE_EDIT_ENABLE, GENERATE_FACULTY_ADD_OFFERED, GENERATE_FACULTY_LIST, GENERATE_FACULTY_OFFERED, GENERATE_FACULTY_REMOVE_OFFERED, GENERATE_NEXT_DISABLE, GENERATE_NEXT_ENABLE, GENERATE_OFFER_COURSE_SELECTED, GENERATE_OFFER_COURSE_UNSELECTED, GENERATE_OFFER_SECTION_SELECTED, GENERATE_OFFER_SECTION_UNSELECTED, GENERATE_SELECT_FACULTY } from "../constants/appConstants"


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

export const generateFacultyOfferedAddAction = (value) => {
    return {
        type: GENERATE_FACULTY_ADD_OFFERED,
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


export const generateFacultyListAction = (value) => {
    return {
        type: GENERATE_FACULTY_LIST,
        playload: value
    }
}



export const generateOfferCourseSelectedAction = (value) => {
    return {
        type: GENERATE_OFFER_COURSE_SELECTED,
        playload: value
    }
}


export const generateOfferSectionSelectedAction = (value) => {
    return {
        type: GENERATE_OFFER_SECTION_SELECTED,
        playload: value
    }
}




export const generateOfferCourseUnselectedAction = (value) => {
    return {
        type: GENERATE_OFFER_COURSE_UNSELECTED,
        playload: value
    }
}


export const generateOfferSectionUnselectedAction = (value) => {
    return {
        type: GENERATE_OFFER_SECTION_UNSELECTED,
        playload: value
    }
}



