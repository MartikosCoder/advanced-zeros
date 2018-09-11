module.exports = function getZerosCount(number, base) {
    let result = 0;

    for (let i = 5; parseInt(number / i) > 0; i *= 5) {
        result += parseInt(number / i);
    }

    return result;
}
