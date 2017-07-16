import * as constants from "../Constants";

function articles(state = {}, action) {
    switch (action.type) {
        case constants.ADD_ARTICLES:
            state = [...state, ...action.payloads];
			return state;

        default:
            return state;
    }
}

export default articles;
