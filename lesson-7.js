// Looping

// While
/*
  while (condition) {
    syntax
  }
*/

// let index = 0

// while (index < 10) {
//   console.log(index)
//   index++
// }

// Do While
/*
  do {
    syntax
  } while (condition)
*/
// let index2 = 0

// do {
//   console.log(index2)
// } while (index2 > 1)

// For

// for indicator;condition;incerement/decrement
/*
  for (let i = 0; i < 10; i++) {
    syntax
  }
*/

// for in
// for in object
// const mahasiswa = {
//   name: "Joni",
//   fakulty: "Teknik Informatika",
//   age: 21,
// }

// for (const key in mahasiswa) {
//   console.log(mahasiswa[key])
// }

// for in array
// const fruits = ['Banana', 'Apple', 'Orange', 'Grapes']
// for (const index in fruits) {
//   console.log(index)
// }

// for of
// object is not iterable
// for of array
// for (const fruit of fruits) {
//   console.log(fruit)
// }

// continue
// for (const fruit of fruits) {
//   if (fruit.toLowerCase() === 'apple') continue

//   console.log(fruit)
// }

// const userType = 'admin'
// const isVerified = true

// if (userType === 'admin') {
//   if (isVerified) {
//     console.log('hello admin')
//   } else {
//     console.log('you must verify first')
//   }
// } else {
//   if (isVerified) {
//     console.log('hello user')
//   } else {
//     console.log('you must register')
//   }
// }



// function login() {
//   if (!isVerified) {
//     console.log('you must register')
//     return
//   }

//   if (userType !== 'admin') {
//     console.log('hello user')
//     return
//   }

//   console.log('hello admin')
// }

// break
// for (const fruit of fruits) {
//   if (fruit.toLowerCase() === 'orange') {
//     console.log('Yay you found orange')
//     break
//   }
//   console.log(fruit)
// }
