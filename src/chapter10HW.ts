// 1)
export interface Animal {
    name: string
    speak(): string
  }
  
  export function create(name: string): Animal {
    return {
      name,
      speak: () => `Hello, I'm ${name}`
    }
  }
  
  export function isAnimal(obj: any): obj is Animal {
    return 'name' in obj && typeof obj.speak === 'function'
  }
  
  
  const dog = create("Buddy")
  console.log(dog.speak())
  console.log(isAnimal(dog))
  
  

//2)

enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  namespace Direction {
    export function toString(direction: Direction): string {
      switch (direction) {
        case Direction.Up: return "Up"
        case Direction.Down: return "Down"
        case Direction.Left: return "Left"
        case Direction.Right: return "Right"
        default: return "Unknown"
      }
    }
  
    export function opposite(direction: Direction): Direction {
      switch (direction) {
        case Direction.Up: return Direction.Down
        case Direction.Down: return Direction.Up
        case Direction.Left: return Direction.Right
        case Direction.Right: return Direction.Left
        default: throw new Error("Invalid direction")
      }
    }
  }
  
  const myDirection = Direction.Left;
  console.log(Direction.toString(myDirection))
  console.log(Direction.opposite(myDirection))
  