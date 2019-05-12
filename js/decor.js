/**
 * 1. Создаем основную функцию
 * 2. Создаем функцию проверку
 * 3. Создаем функцию обертку = f( Fосн, Fпроверки )
 * 4. Обертываем основную функцию, приравниваем к функции обертке
**/

function sum(a,b) {
    return a + b;
}

function isNumber(value) {
    return typeof value == "number";
}

function typeCheck(f, check){
    return function () {
        for (let i = 0; i < arguments.length; i++){
            if (!check(arguments[i])){
                return 'неверный тип данных'
            }
        }
        return f.apply(this, arguments);
    }
}

sum = typeCheck(sum, isNumber);

console.log(sum(7,8));

/**
///////////////////////////////////
 **/

function sayHi(who) {
    alert('Привет, ' + who);
}

function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}

let say = defer(sayHi, 2000);
say('Вася');

