function move (position, roll) {
let spot = position + (roll * 2)
return spot;
}
console.log(move(3, 6))