const tmpReplace = (data) => {
	return this.replace(/{([^}]+)}/g, (match, group) => {
		return data[group.toLowerCase()];
	});
}
export default tmpReplace;
