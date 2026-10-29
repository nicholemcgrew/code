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


function multiplesOfThree(n) {
  const numbers = [];

for (let number = 3; number <= n; number += 3) {
 numbers.push(number)
}
  return numbers;
}
console.log(multiplesOfThree(33))
