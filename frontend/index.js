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


const myCourses = ["learn css animations", "ui design fundamentails", "intro to the clean code"]

function render(input) {
    for (i=0; i<input.length; i++) {
        console.log(input[i])
    }
}

localStorage.setItem("hallo","moin")
console.log(localStorage)

const data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "markus",
        score: 0
    }
]


randomBtn = document.getElementById("random-btn")
randomBtn.addEventListener("click", function() {
    console.log(data[0].player)
})


function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are: `
    const lastIndex = arr.length -1
    for (i=0; i<arr.length; i++){
        if (i === lastIndex) {
            baseString += arr[i]
        }else {
            baseString +=arr[i]+", "
        }
    
    }
    return baseString
}

console.log(generateSentence("largest Countries", ["China","India", "USA"]))

const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

const container = document.getElementById("container")

function render(content) {
    let imgsDom =""
    for (i=0; i<content.length; i++){
        imgsDom += `<img alt="Employee in the company" class="team-img" src="${content[i]}">`
    }
    container.innerHTML = imgsDom
}


render(imgs)