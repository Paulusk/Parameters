function greetUser (greeting, name, emoji) {
    greetingText = `${greeting}, ${name} ${emoji}`
    console.log(greetingText)
}
greetUser("Servus", "Claus",":)")

console.log(add(3,4))
function add(x,y){
    let sum = x + y
    return sum
}
console.log(add(109,2))

const array = ["servus","mahlzeit","okese"]

function getFirst(arr) 
    {return arr[0]}
let firstCard = getFirst([10,3,1])
console.log(firstCard)