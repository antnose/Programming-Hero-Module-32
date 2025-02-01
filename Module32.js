// 32-1 Module Overview, Primitive And Non-Primitive Data Types

// Primitive DataType
// const a = 5;
// const b = "Samsu kopai na ekhon ar";
// const d = true;

// Non-Primitive DataType
// const ages = [45, 23, 67];
// const student = { id: 23, class: 8 };
// console.log(typeof a, typeof b, typeof ages, typeof student);

// let x = 5;
// let y = x;
// console.log(x, y);

// y = 7;
// console.log(x, y);

// let p = { job: "web developer" };
// let q = p;
// q = { job: "Backend end" };
// console.log(p, q);

// q.job = "frontend developer";
// console.log(p, q);

//
// 32-2 Null Vs Undefined, Different Ways You Will get Undefined
/**
 * 8 Ways to get undefine
 *
 * 1. Variable that is not initialized will give undefined
 * 2. Function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range will give you undefined
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */

// let first;
// console.log(first);

// function second(a, b) {
//   const total = a + b;
// }
// console.log(second(1, 2));

// function third(a, b, c, d) {
//   const total = a + b + c + d;
//   console.log(a, b, c, d);
// }
// third(12, 5);

// function noNegative(a, b) {
//   if (a < 0 || b < 0) {
//     return;
//   }
//   return a + b;
// }
// console.log(noNegative(-2, 5));

// const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.age, fifth.salary);

// const sixth = [2, 4, 56, 89, 39];
// console.log(sixth[1], sixth[7]);

// const seventh = [2, 4, 56, 89, 39];
// you should not do it. Instead use splice
// delete seventh[1];
// console.log(seventh);

// const eighth = undefined;

// const ninth = null;

// const data = { results: [], updated: null };

// console.log(typeof undefined);
// console.log(typeof null);

// 32-3 Different Truthy and Falsy Values in JS
/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0
 * 3. any string other than empty string
 * 4. '0', 'false'
 * 5. {} empty object
 * 6. [] empty array
 *
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' empty string
 * 4. undefined
 * 5. null
 */

// const x = false;
// if (x) {
//   console.log(`value of x is truthy`);
// } else {
//   console.log(`value of x is falsy`);
// }

// optional
// check falsy
// const x = 0;
// if (!x) {
//   console.log("Nothing");
// }

// 32-4 Double Equal(==) Vs Triple Equal(===), implicit conversion

// always use ===
// equal comparison doesn't work for non-primitive

// const first = 2;
// const second = 2;
// if (first == second) {
//   console.log("Values are equal");
// } else {
//   console.log("Values are not equal");
// }

// const third = 2;
// const fourth = "2";
// if (third === fourth) {
//   console.log("Values are equal");
// } else {
//   console.log("Values are not equal");
// }

// type coercion
// type conversion
// type casting

// 32-5 Block scope global scope simple understanding of Hoisting
// function add(a, b) {
//   console.log(a + b);
//   if (a > b) {
//     console.log(25 + a + b);
//   }
// }
// add(5, 8);

// print5();
// print10();

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(`outside`, i);

// function print5() {
//   console.log("Inside print", 5);
// }

// const print10 = function () {
//   console.log("inside print 10");
// };

// 32-6 (advanced) Closure, encapsulation, private variable

// function kitchen() {
//   let roast = 0;
//   return () => {
//     return ++roast;
//   };
// }

// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

// function greeting(greetingHandler, name) {
//   greetingHandler(name);
// }
// const name = "Rony";
// greeting(name);

// const laptop = { price: 23000, brand: "lenevo", memory: "8gb" };
// greeting(laptop);

// function greetingHandler(name) {
//   console.log("Good Morning", name);
// }

// function greetEvening(name) {
//   console.log("Good Evening", name);
// }

// function greetNight(name) {
//   console.log("Good Night", name);
// }

// greeting(greetingHandler, "Hanks");
// greeting(greetingHandler, "Tom Brady");
// greeting(greetingHandler, "Tom Cruise");

// greeting(greetEvening, "Tom Solaiman");
// greeting(greetEvening, "Tom Salman");

// greeting(greetNight, "Rasel");

// document.getElementById()
