//1) Основные отличия класса от интерфейса в TypeScript заключаются в следующем:
// Класс — это конкретная реализация с конструкторами, методами и возможностью инициализировать объекты. Он поддерживает модификаторы доступа (public, protected, private) для управления видимостью и уровнем доступа к своим членам.
// Интерфейс описывает структуру данных или тип объекта, но не предоставляет конкретной реализации. Интерфейсы используются для типизации и создания контрактов, но не могут быть инстанцированы напрямую.

//2)Когда конструктор класса помечен как protected, это означает, что:
// Инстанцировать класс напрямую невозможно за его пределами.
// Класс может быть расширен (унаследован), а его наследники смогут вызывать super() для вызова защищенного конструктора.

class Base {
    protected constructor(public value: string) {}
  }
  
  class NotBase extends Base {
    constructor(value: string) {
      super(value)
    }
  }
  
  // Невозможно создать экземпляр Base напрямую
  // const instance = new Base("Base") // Ошибка
  
  const notBaseInstance = new NotBase("asd")

  //3)
   abstract class Shoe {
    static create(type: "boot"): Boot;
    static create(type: "balletFlat"): BalletFlat
    static create(type: "sneaker"): Sneaker
    static create(type: string): Shoe {
      switch (type) {
        case "boot": return new Boot();
        case "balletFlat": return new BalletFlat()
        case "sneaker": return new Sneaker()
        default: throw new Error("Invalid shoe type")
      }
    }
  }
  
  class Boot extends Shoe {}
  class BalletFlat extends Shoe {}
  class Sneaker extends Shoe {}
  
  // Пример использования:
  const myBoot = Shoe.create("boot")
  const myBalletFlat = Shoe.create("balletFlat")