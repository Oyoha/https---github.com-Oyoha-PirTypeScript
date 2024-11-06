let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

//a - number
//b - number
//c - объект со свойствами apple и banana, которые являются number
//d - number

//ошибка 
let e = 1 * "2"


// Исправление 
let eFixed = 1 * 2

//Функция, где TS не сможет вывести тип
function mystery(x) {
    return x * 2;
  }