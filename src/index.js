module.exports = function getZerosCount(number, base) {
    let counter = Number.MAX_VALUE;

    for(let i = 2; i <= base; i++){
        if(base % i === 0){
            let cnt_base1 = 0;

            while (base % i === 0){
                cnt_base1++;
                base = parseInt(base / i);
            }

            let cnt_base2 = 0;
            let t = number;

            while (t / i > 0){
                cnt_base2 += parseInt(t / i);
                t = parseInt(t / i);
            }

            counter = Math.min(counter, cnt_base2 / cnt_base1);
        }
    }

    return parseInt(counter);
}
