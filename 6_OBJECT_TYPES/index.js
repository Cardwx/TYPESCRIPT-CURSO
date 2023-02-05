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
