import { reducerCases } from "./constants";

export const initialState = {
    eventList : [],
    members : [],
    testimonials : [],
    eventDetails : {},
    upComingEvent : {},
    notification : {},
};

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_EVENT_LIST : {
            return {
                ...state,
                eventList: action.eventList,
            };
        }
        case reducerCases.SET_EVENT_DETAILS : {
            return {
                ...state,
                eventDetails: action.eventDetails,
            };
        }
        case reducerCases.SET_UPCOMING_EVENT : {
            return {
                ...state,
                upComingEvent: action.upComingEvent,
            };
        }
        case reducerCases.SET_MEMBERS : {
            return {
                ...state,
                members: action.members,
            };
        }
        case reducerCases.SET_TESTIMONIALS : {
            return {
                ...state,
                testimonials: action.testimonials,
            };
        }
        case reducerCases.SET_NOTIFICATION : {
            return {
                ...state,
                notification: action.notification,
            };
        }
        default:
             return state;
    }
};

export default reducer;