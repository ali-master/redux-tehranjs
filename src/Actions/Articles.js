import * as constants from "../Constants";

export const addArticles = (payloads) => {
	return (dispatch, getState) => {
		dispatch({type: constants.ADD_ARTICLES, payloads});
	}
};

export const deleteArticle = (id) => ({type: constants.DELETE_ARTICLE, id});
