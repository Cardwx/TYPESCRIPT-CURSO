"use strict";
// 1 - introdução ao generics
// aceita tipo genérico de dados conforme informado no começo da função
// pode ser aceito mais de um tipo, conceito mais interessante que utilizar o any
function showData(arg) {
    return `O dado é: ${arg}`;
}
// aqui realizo os testes comprovando que podemos inserir qualquer tipo de dado na generic
console.log(showData(5));
console.log(showData("tofa"));
console.log(showData(true));
// ou seja, faz uma conversão do tipo genérico para string
// 2 - constraint em generic
// limitamos os tipos de dados na função, ou seja se a generic normal aceitava qualquer tipo de dado e convertia em seguida
// agora com a constraint limitamos os atributos a aceitarem apenas um ou mais tipos, como no exemplo abaixo
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
// percebe-se que aqui não definimos a propriedade name e muito menos colocamos a string, ao declararmos essa variável será apresentado erro
const thirdObj = { price: 19.99, category: "Roupa" };
// outro fato interessante é que não precisamos seguir uma lógica, portanto podemos adicionar mais varíaveis de outro tipo, contanto que tenha a exigida na função ali em cima
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "fusca", wheels: 4, engine: 1.0, color: "branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: 'blue' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters 
// consegue apenas pegar os valores presentes dentro da chave
function getSomekey(obj, key) {
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomekey(server, "ram"));
// console.log(getSomekey(server, "teste"))
