module.exports = function getZerosCount(number, base) {
    if(base <= number){
        let counter = 0;

        for(let i = 5; parseInt(number / i) > 0; i *= 5){
            counter += parseInt(number / i);
        }

        return counter;
    } else {

    }

    let based_num = 0;
    let str = '';

    while(number > 0){
        str += number % base;
        number = parseInt(number / base);
    }

    based_num = parseInt(str.split('').reverse().join(''));
}
