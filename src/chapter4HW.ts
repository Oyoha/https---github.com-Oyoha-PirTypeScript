// 1)TypeScript выводит и параметры, и возвращаемый тип для функций. Если у функции явно не указан возвращаемый тип, TypeScript автоматически определяет его на основе типа возвращаемого значения.

//2)Объект arguments не является типобезопасным, так как он содержит все переданные аргументы в виде массива, не обеспечивая строгого контроля типов для них. Вместо arguments рекомендуется использовать параметры Rest (...args), которые TypeScript может типизировать

function example(...args: number[]): number { //Что то типо такого
    return args.reduce((acc, cur) => acc + cur, 0)
  }

//3)

type Reserve = {
    (from: Date, to: Date, destination: string): void;
    (destination: string): void;
  };
  
  const reserve: Reserve = (
    fromOrDestination: Date | string,
    to?: Date,
    destination?: string
  ) => {
    if (typeof fromOrDestination === "string") {
      console.log(`Отпуск забронирован на ${fromOrDestination}, начинается сразу`)
    } else if (fromOrDestination && to && destination) {
      console.log(`Отпуск забронирован с ${fromOrDestination} по ${to} в ${destination}`)
    }
  };
  
  // Примеры использования:
  reserve(new Date(), new Date(), "Париж")
  reserve("Париж")
  
  //5)
  function is<T>(a: T, b: T): boolean {
    return a === b;
  }

  

  // Сравнить string и string
is('string', 'otherstring') // false
// Сравнить boolean и boolean
is(true, false) // false
// Сравнить number и number
is(42, 42) // true
// Сравнение двух различных типов должно выдавать ошибку 
// при компиляции
is(10, 'foo') // Ошибка TS2345: аргумент типа '"foo"' не может
 // быть присвоен параметру типа 'number'

 // Дополнительная сложность: поддержка нескольких аргументов
function isMultiple<T>(...args: T[]): boolean {
    return args.every((val, _, arr) => val === arr[0]);
  }

  isMultiple([1], [1, 2], [1, 2, 3])