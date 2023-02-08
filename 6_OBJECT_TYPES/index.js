"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é R$${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log("O seu produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 129.99, isAvaliable: false });
function showUserDetail(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "lcb.barbeiro@gmail.com", role: "Admin" };
const u2 = { email: "lucas@tofa.com" };
showUserDetail(u1);
showUserDetail(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "Lucas",
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "genki dama"]
};
console.log(goku);
console.log(goku.superpowers);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly com arrays, seguimos a mesma filosofia do reaonly normal, porém definimos que não poderá ser acrescentado nada ao array e nem removido ao não ser por metodos
let meuArray = ["maça", "pera", "abacaxi"];
// percebe-se que dessa maneira abaixo não podemos acrescentar o item no array, devido termos atribuido o readonly
// meuArray[3] = "Fruta"
console.log(meuArray);
