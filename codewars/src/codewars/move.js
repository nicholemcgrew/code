// function move (position, roll) {
// let spot = position + (roll * 2)
// return spot;
// }
// console.log(move(3, 6))

// function switchItUp(number){
// return ["Zero", "One","Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
//     }
//     console.log(switchItUp(9))

//     function generateRange(min, max, step){
// let numbers = [];
//   for (let number = min; number <= max; number += step) {
//     numbers.push(number)
//   }
//   return numbers;
// }
// console.log(generateRange(2, 10, 2))


// function multiplesOfThree(n) {
//   const numbers = [];

// for (let number = 3; number <= n; number += 3) {
//  numbers.push(number)
// }
//   return numbers;
// }
// console.log(multiplesOfThree(33))

// function sumTo(n) {
// let numbers = 0;
// for (let number = 1; number <= n; number++)
// numbers += number
// return numbers


// }

// function countDown(n) {
// let numbers = []
// for (let number = n; number >= 0; number--) {
//     numbers.push(number)
// }
//  return numbers
// }
// console.log(countDown(12))

// function squares(n) {
// let numbers = []
// for (let number = 1; number <= n; number++) {
//     numbers.push(number**2)
// }
// return numbers
// }

// console.log(squares(4))

// function evenNumbers(n) {
// let numbers = []
// for (let number = 0; number <= n; number +=2) {
//     numbers.push(number)
// }
// return numbers
// }
// console.log(evenNumbers(7))

// function oddNumbers(n) {
// let numbers = []
// for (let number = 1; number <= n; number +=2) {
//     numbers.push(number)
// }
// return numbers 
// }
// console.log(oddNumbers(7))

// function multiplesOfFive(n) {
// let numbers = []
// for (let number = 5; number <= n; number +=5) {
//     numbers.push(number)
// }
// return numbers
// }
// console.log(multiplesOfFive(25))

// function peopleWithAgeDrink(old) {
//   return old < 14 ? “drink toddy”
// : old < 18 ? “drink coke”
// : old < 21 ? “drink beer”
//   : “drink whisky”
//   }

//   function sumOdd(n) {
//  let total = 0;
// for (let number = 1; number <= n; number += 2) {
//     total += number
// }
// return total
// }

// console.log(sumOdd(5)); // 9
// console.log(sumOdd(8)); // 16
// console.log(sumOdd(0)); // 0

// function countDown(n) {
// let numbers = []
// for (let number = n; number >= 0; number--) {
//     numbers.push(number)
// }
// return numbers
// }

// console.log(countDown(4)); // [4, 3, 2, 1, 0]
// console.log(countDown(0)); // [0])

// function multiplesOfFour(n) {
// let numbers = []
// for (let number = 4; number <= n; number += 4) {
//     numbers.push(number)
// }
// return numbers;
// }


// function sumTo(n) {
// let total = 0;
// for (let number = 1; number <= n; number++) {
//     total += number
// }
// return total
// }
// console.log(sumTo(4)); // [4, 8, 12]
// console.log(multiplesOfFour(16)); // [4, 8, 12, 16]
// console.log(multiplesOfFour(2));  // [])


function sumArray(numbers) {
let sum = []
for (let number = numbers; number <= numbers; number++) {
    sum.push(number)
}
return sum
}

console.log(sumArray([3, 4, 5, 6]))