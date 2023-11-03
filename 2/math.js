//кол подьездов 
let entrances = 4;
// кол этажей 
let floors = 9;

let flatsRerfloor = 4;


let floorsRerFloor = floors = flatsRerfloor;

let flatsPerEntrance = entrances = floors * flatsRerfloor;
console.log('Квртир в подьезде', flatsPerEntrance);

let flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);



//comprariosn


let x = 10;
let y = 20;

// x равен у 
console.log( x === y); //false
//  x равен 10 
console.log(x === 10); //true



// x не равен y
console.log(x !==y); //true

// у не равен 20
console.log(y !== 20); //false


console.log(x > y); // false
console.log(x < y); //true


// x больше или равно у
console.log(x >= y); // false
// x меньше или равно у
console.log(x <= y); //true


// infinity  бесканечность

Infinity > 100000 // true 
-Infinity < -134932 // true











// math
Math.round(3.8) // 4 , математическая округления
Math.round(3.2) // 3 
Math.floor(3.9) // 3 округления вниз
Math.ceil(3.2) // 4 огругления вверх

// наименьшее и наибольшее число 
Math.max(1, 3, 20, 5) // 20
Math.min(30, 1, 40, -10) // -10



// возведения в степень 

Math.pow(10, 3); // 10 * 3

Math.sqrt(16); //4, квадратный корень чисел


//случайные числа 
Math.random(); //случайные дробные числа от 0 до 1
Math.random(Math.random() * 100); // случайное число от 0 до 100
Math.random(Math.random() * 70) + 50; //случайное число от 50 до 120


