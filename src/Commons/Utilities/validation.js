export const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(email);
}

export const validateMobile = (number) => {
    const regexPhoneNumber = /^\+?([0-9]{2}|[0-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;

    return number.match(regexPhoneNumber);
}

// در نسخه‌های قبل یکسان بودن اعداد نا معتبر تشخیص داده می‌شد ولی
// اعداد یکسان نامعتبر نیست http://www.fardanews.com/fa/news/127747
/**
 * @author Ali Torki (2016)
 * @lincense: Public Domain
 */

export const validateCodeMelli = (code) => {
	if (!code.match(/^\d{10}$/)) return false;

	code = ('0000' + code).substr(code.length + 4 - 10);
	if (parseInt(code.substr(3, 6), 10) === 0) return false;

	let lastNumber = parseInt(code.substr(9, 1), 10);
	let sum = 0;
	for (let i = 0; i < 9; i++){
		sum += parseInt(code.substr(i, 1), 10) * (10 - i);
	}
	sum = sum % 11;

	return (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === (11 - sum));
	return true;
}
