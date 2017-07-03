import _ from "lodash";

// convert persian number to english
const digitsFa2En = (number) => {
	if(_.isUndefined(number)) return;

	if (_.isNaN(number)) return number

	const numDic = {
		'۰': '0',
		'۱': '1',
		'۲': '2',
		'۳': '3',
		'۴': '4',
		'۵': '5',
		'۶': '6',
		'۷': '7',
		'۸': '8',
		'۹': '9'
	}

	return number.replace(/[۰-۹]/g, (w) => {
		return numDic[w]
	})
}

export default digitsFa2En
