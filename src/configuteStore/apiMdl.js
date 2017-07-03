const api = store => dispatch => action => {
	console.log(action);
	console.log(store);
	dispatch(action);
}

export default api;
