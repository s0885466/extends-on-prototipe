'use strict';



function sum(...arr) {
    var s = 0;
    arr.forEach(el => s += el);
    return s;
}

function check() {
    return (typeof arguments[0] === "number");
}

var sumDecor = function (sum, check) {
    return function (...arg) {
        var bul = arg.some(function (el) {
            return !check(el);
        });

        if (!bul) return sum.apply(this, arguments);
        else return 'ошибка, функция складывает только числа'

    }
};


var sum1 = sumDecor(sum, check);
console.log(sum1(1,18,0));

var arr = [1,2,3,4];
arr = arr.map((el)=>`<li>${el} px</li>`).join('');
console.log(arr);

var x = 'Привет папа';
console.log(/папа/.test(x));
console.log(x.indexOf('папа'));






