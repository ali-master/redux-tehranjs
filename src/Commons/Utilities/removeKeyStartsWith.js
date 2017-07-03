const removeKeyStartsWith = (obj, letter) => {
    Object.keys(obj).forEach((key) => {
        key.match('^' + letter) && delete obj[key];
    });
    return obj;
}

export default removeKeyStartsWith;
