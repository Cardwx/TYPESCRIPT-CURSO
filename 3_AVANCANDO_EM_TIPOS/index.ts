//1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

//numbers = "teste"

const nomes: string[] = ["Matheus", "João"]

//nomes.push(4)

// 2 - outra sintaxe de array

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

//nums.push("teste")
console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], {nome:"lucas"}]

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log( a + b)
}

soma(4, 5)

// 5 - retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Lucas"))

// 6 - função anonima

setTimeout(function(){

    const sallary: number = 1000

    // console.log(parseFloat(sallary))
    
    // console.log(sallary)

}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y:number}){
    console.log("X coordinates: " + coord.x)
    console.log("X coordinates: " + coord.y)
}

const objtCoord = {x: 220, y:339}

passCoordinates(objtCoord)


// 8 - props opcionais

function showNumbers(a: number, b:number, c?:number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - validando argumento opcionak

function advancedGreeting(firstName: string, lastName?: string){

    if(lastName !== undefined){
        console.log(`Olá, ${firstName} ${lastName}, tudo bem? ` )
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Lucas", "Cardoso"))
console.log(advancedGreeting("Lucas"))

// 10 - union type

function showBalance( balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")


const arr2: Array <number | string | boolean> = [1, "true", true]

// 11 - avancando em union types

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado"
    }
    return `A função do usuário é: ${role}` 
}

console.log( showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias --> simplifica o union types
type ID = number | string

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - Interfaces
interface Point{
    x:number
    y:number
    z:number
}

function showCoords(obj: Point){
    console.log(`X ${obj.x} Y ${obj.y} Z ${obj.z}`)
}

const coordObjt: Point = {
    x: 10,
    y: 20,
    z: 30
}

showCoords(coordObjt)

// 14 - interface x type alias

interface Person{
    name: string
}

interface Person{
    age:number
}
const somePerson: Person =  {name:"Matheus", age: 30}
console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types
// utilizando apenas o literal não muda em nada, o indicado é utiliar com union types
let test: "testando"

test = "testando"

console.log(test)

function showDirection (direction: "left" | "right" | "center" ){
    console.log(`A direção é: ${direction}`)
}
showDirection("left")

//showDirection("top")
