import * as constants from "../Constants";

function users(state = [], action) {
    switch (action.type) {
        case constants.ADD_USER:
            state = [...state, action.payloads];
			return state;

        default:
            return state;
    }
}

export default users;
