/*
Вычислите расстояние между двуммя точками.\Даны координаты x, y 2-x точек.Нужно вывести растояние между ними. 
Вычислите по теореме пифагора
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
))


//Сравнивнем два числа с указаной точностю

let firts = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;


let firstNormalized = Math.round(
    firts = Math.pow(10, precision)
);

let secondNormalized = Math.round(
    second = Math.pow(10, precision)
);


console.log('Исходние числа равны', firts === second);
console.log('Числа равны', firstNormalized === secondNormalized);
console.log('Первое число больше', firstNormalized > secondNormalized);
console.log('Первое число меньще', firstNormalized < secondNormalized);

// генератор случайних чисел между n до m 

let n = -100;
let m = 350;

let range = Math.abs(m - n);


let numberInRange = Math.round(Math.random() = range);


let min = Math.min + numberInRange;

console.log(min + numberInRange);
