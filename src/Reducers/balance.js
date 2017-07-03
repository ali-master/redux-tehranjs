import * as constants from "../Constants";

function balance(state = 0, action) {
    switch (action.type) {
        case constants.ADD:
            return state + action.value;
            break;
        case constants.DESREMENT:
            return state - action.value;
            break;
        default:
            return state;
    }
}

export default balance;
