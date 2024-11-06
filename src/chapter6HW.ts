// 1. Для каждой пары приведенных ниже типов определите их совместимость и объясните свой выбор. Рассуждайте выражениями подтипизации и вариантности, а в случае сомнений обратитесь к правилам 
// из начала главы (если и это не поможет, то просто напечатайте их 
// в редакторе, чтобы проверить):
// а) 1 и number;
// б) number и 1;
// в) string и number | string;
// г) boolean и number;
// д) number[] и (number | string)[];
// е) (number | string)[] и number[];
// ж) {a: true} и {a: boolean};
// з) {a: {b: [string]}} и {a: {b: [number | string]}};
// и) (a: number) => string и (b: number) => string;
// к) (a: number) => string и (a: string) => string;
// л) (a: number | string) => string и (a: string) => string;
// м) E.X (определен в перечислении enum E {X = 'X'}) и F.X (определен 
// в перечислении enum F {X = 'X'})

// а) Совместимы. 1 является подтипом number, так как конкретное значение (1) является подмножеством всех чисел.

// б) Не совместимы. Тип number шире, чем 1, поэтому присвоить переменной типа 1 значение number невозможно, так как не гарантируется, что это значение будет именно 1.

// в) Совместимы. Тип string является подтипом объединенного типа number | string, так как он покрывает одну из возможных вариантов.

// г) Не совместимы. Типы boolean и number несовместимы, так как они относятся к различным базовым типам.

// д) Совместимы. Массив number[] может быть присвоен массиву типа (number | string)[], так как каждый number совместим с объединением number | string.

// е) Не совместимы. Массив (number | string)[] не совместим с number[], так как он может содержать значения string, которые недопустимы в массиве number.

// ж) Совместимы. Объект { a: true } может быть присвоен { a: boolean }, так как true является подтипом boolean.

// з) Совместимы. Тип { a: { b: [string] } } является подтипом { a: { b: [number | string] } }, так как [string] можно рассматривать как подтип [number | string].

// и) Совместимы. Типы параметров функций (a: number) => string и (b: number) => string совместимы, так как имя параметра не влияет на тип функции.

// к) Не совместимы. Вариантность параметров не допускает, чтобы функция принимала string, если ожидается number.

// л) Совместимы. (a: number | string) => string является более общим типом функции, так что он совместим с (a: string) => string.

// м) Не совместимы. E.X и F.X — это значения различных перечислений (enum), поэтому они не совместимы.




// 2) Для объекта type O = { a: { b: { c: string } } }:

// keyof O будет "a", так как O имеет единственное ключевое свойство a.
// O['a']['b'] будет { c: string }, так как это значение ключа b внутри a.



// 3) type Exclusive<T, U> = Exclude<T | U, T & U>;