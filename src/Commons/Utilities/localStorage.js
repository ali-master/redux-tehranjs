import isEmpty from "lodash/isEmpty";

const Global = (typeof window !== 'undefined' ? window : global)

export const localStorage = () => {
	return Global.localStorage
}

/**
 * Read localStorage item
 */
export const read = (key) => {
	return localStorage().getItem(key);
}

/**
 * write item into localStorage
 */
export const write = (key, value) => {
	return localStorage().setItem(key, value)
}

/**
 * check aviability key in localStorage
 */
export const has = (key) => {
	return !isEmpty(read(key));
}

/**
 * Each localStorage items
 */
export const each = (fn) => {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

/**
 * remove localStorage item with key
 */
export const remove = (key) => {
	return localStorage().removeItem(key)
}

/**
 * Clear All localStorage items
 */
export const clearAll = () => {
	return localStorage().clear()
}
