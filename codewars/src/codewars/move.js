function move (position, roll) {
let spot = position + (roll * 2)
return spot;
}
console.log(move(3, 6))

function switchItUp(number){
return ["Zero", "One","Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
    }
    console.log(switchItUp(9))