const fruits = [ "Banana", "Orange", "Lemon", "Apple", "Mango"]

const result = fruits.find((f)=> f === "Orange")
// console.log(result)
const index = fruits.findIndex((f)=> f === "Orange")
// console.log(index)
const fitler_fruits = fruits.filter((f)=> f ==="Orange" || f === "Lemon")
// console.log(fitler_fruits)
const slice = fruits.slice(1,3)
// console.log(slice)
const concat = fruits.concat(["fruit-1", "fruit-2"])
// console.log(concat)
const map = fruits.map((f) => f === "Apple")
// console.log(map)

let numbers = [1,2,3,4,5]

let res = numbers.reduce((total, currentValue)=> total+ currentValue, 0)
// console.log(res)

// numbers.forEach((f) =>console.log(f))

for (i of numbers){
    console.log(i)
}
