// primitive
// tipe data yang tidak bisa di manipulasi

// number
console.log(Number.MAX_SAFE_INTEGER)
// boolean
// string

// null
// undefined

console.log('1' + 1); // 11
console.log('3' - 1); // 1
console.log('a' - 1); // NaN
console.log(true + 1); // 2

let name = "joko";

console.log(name[1]); // o
name[1] = "a"
console.log(name[1]); // o
const upperCasedName = name.toUpperCase()
console.log(upperCasedName)

// non-primitive
// object
const person = {
  name: "joko",
  age: 21,
}
console.log("type of person: ", typeof person) // object
// array
const fruits = ["orange", "grapes", "banana"];
fruits[1] = "apple"
console.log(fruits)
console.log('type of fruits: ', typeof fruits) // object

// bigint
// map
// set

const angka = 10;
const stringifiedNumber = String(angka)

console.log(typeof stringifiedNumber)

let a = 10, b = 11;

let x = 10;
let y = 11;

const c = "5";
console.log(typeof +c); // number
