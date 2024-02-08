// functions

// anonymous function
// const iniFunction = function() {
//   console.log('ini anonymous function')
// }

// iniFunction()

// conventional function

// printName('joko')

// function printName(name) {
//   if (!name) {
//     console.log('You did not provide your name')
//     return
//   }

//   console.log('Your name is: ', name)
// }

// arrow function

// const arrowFunction = () => 'ini arrow function'

// console.log(arrowFunction())

// function newObj() {
//   console.log(this)
// }

// const newObj = () => {
//   console.log(this)
// } error

// scope

// let a = 1

// function test() {
//   let a = 1
//   a++
//   console.log(a)
// }

// function testB() {
//   console.log(a)
// }

// test()
// testB()

/*
global 
scope a{
  global

  scope b {
    global

    inner variable
  }
}
*/

// callback atau higher order function
// function yang jadi parameter

// function getName(name) {
//   return `My name is ${name}`
// }

// function introduce(name, func) {
//   const perkenalan = func(name)

//   console.log('Hello, ', perkenalan)
// }

// introduce('susanto', getName)
