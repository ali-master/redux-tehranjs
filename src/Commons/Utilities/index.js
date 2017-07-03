import generateUUID from "./uuid";

import toFa from './digitsEn2Fa';
import toEn from './digitsFa2En';

import tmpReplace from './tmpReplace';
import StringReplace from './StringReplace';

import isPersian from './isPersian';
import getPrice, {toDigits, removeDigist} from './toWords';

import Request from './Request';

import removeKeyStartsWith from "./removeKeyStartsWith";
import changeNumberOfData from "./changeNumberOfData";

import lsbridge from "./lsbridge";
import * as localStorage from "./localStorage";

import {validateEmail, validateMobile, validateCodeMelli} from "./validation";



export {
	generateUUID,

	toFa,
	toEn,
	isPersian,
	getPrice,

    toDigits,
    removeDigist,

	tmpReplace,
	StringReplace,

	Request,

	removeKeyStartsWith,
	changeNumberOfData,

	lsbridge,
	localStorage,

	validateCodeMelli,
	validateEmail,
	validateMobile
}
