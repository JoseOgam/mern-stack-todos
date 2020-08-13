// // /*
// // 1 object literals
// // 2 constructor function
// // 3 object.create
// // es6 classes
// // */
// // //dot notation
// // let dog = {
// //   name: "Tiger",
// //   Age: 2,

// // };

// // dog.speak = "grrr";
// // console.log(

// // let counties = {
// //   kisumu: 42,
// //   Nairobi: 47,
// //   Mombasa: 001,
// //   Nakuru: 37,
// // };

// // counties.siaya = 40;
// // console.log(counties.siaya);

// ///constructor functions

// function Dog() {
//   this.name = "Tiger";
//   this.age = 2;
// }
// let dog = new Dog();
// console.log(dog);

// //object.create

// let Dog = Object.create(Object.protype, {
//     name: {
//         value: "Tiger",
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     color: {
//         value: "white",
//         enumerable: true,
//         writable: true,
//         configurable: true

//     }

// }
// )

class Dog {
  constructor(name, age) {
    this.name = "simba";
    this.age = 10;
  }
  speak() {
    return ` ${this.name} ${this.age} grrr`;
  }
}

// var dog = new Dog("simba", 5);
let a = dog.speak();
console.log(a);
