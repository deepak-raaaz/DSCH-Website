import { reducerCases } from "./constants";

export const initialState = {
    skills : [],
    projects: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_SKILLS : {
            return {
                ...state,
                skills: action.skills,
            };
        }
        case reducerCases.SET_PROJECTS : {
            return {
                ...state,
                projects: action.projects,
            };
        }
        default:
             return state;
    }
};

export default reducer;