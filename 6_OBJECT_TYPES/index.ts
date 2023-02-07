// 1 - tipo de objeto para função com interface

interface Product{
    name: string
    price: number
    isAvaliable: boolean
 }

function  showProductDetails( product: Product ) {
    console.log(`O nome do produto é R$${product.name} e seu preço é R$${product.price}`)
    if(product.isAvaliable){
        console.log("O seu produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}
showProductDetails(shirt)
showProductDetails({name: "tenis", price: 129.99, isAvaliable: false})

// 2 - propriedade opcional em interface 

interface User{
    email: string,
    role?: string
}

function showUserDetail (user: User){
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email:"lcb.barbeiro@gmail.com", role: "Admin"}
const u2:User = {email:"lucas@tofa.com"}

showUserDetail(u1)
showUserDetail(u2)

// 3 - readonly
// objetos não mudam as propriedades
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// 4 - index signature - quando não sabemos o nome das chaves mas sabemos os tipos
interface CoordObject{
    [index: string] : number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)


// 5 - extending types - herdar propriedades de outras interfaces

interface Human{
    name:string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const matheus: Human = {
    name: "Lucas",
    age: 30
}


console.log(matheus)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "genki dama" ]
}

console.log(goku)

console.log(goku.superpowers)