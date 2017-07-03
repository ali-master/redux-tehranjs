const digitsEn2Fa = (number) => {
	return number.toString().replace(/\d/g, function(dist) {
		return String.fromCharCode(dist.charCodeAt(0) + 1728);
	});
}

export default digitsEn2Fa;
