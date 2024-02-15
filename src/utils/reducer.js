import { reducerCases } from "./constants";

export const initialState = {
    eventList : [],
    eventDetails : {},
    upComingEvent : {},
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
        default:
             return state;
    }
};

export default reducer;