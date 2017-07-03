import escapeRegExp from 'lodash/escapeRegExp';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import flatten from 'lodash/flatten';
import isEmpty from 'lodash/isEmpty';

const replaceString = (str = "", match, fn) => {
	let curCharStart = 0;
	let curCharLen = 0;

	if (isEmpty(str)) {
		return str;
	} else if (!str || !isString(str)) {
		throw new TypeError('First argument to react-string-replace#replaceString must be a string');
	}

	let regex = match;

	if (!isRegExp(regex)) {
		regex = new RegExp('(' + escapeRegExp(regex) + ')', 'gi');
	}

	let result = str.split(regex);

	// Apply fn to all odd elements
	for (let i = 1, length = result.length; i < length; i += 2) {
		curCharLen = result[i].length;
		curCharStart += result[i - 1].length;
		result[i] = fn(result[i], i, curCharStart);
		curCharStart += curCharLen;
	}

	return result;
}

const StringReplace = (source, match, fn) => {
	if (!Array.isArray(source)) source = [source];

	return flatten(source.map(function(x) {
		return isString(x) ? replaceString(x, match, fn) : x;
	}));
};

export default StringReplace;
