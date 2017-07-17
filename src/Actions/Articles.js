import * as constants from "../Constants";

export const addArticles = (payloads) => {
	return (dispatch, getState) => {
		dispatch({type: constants.ADD_ARTICLES, payloads});
	}
};
