console.log("Essa é uma aula de Javascript do minicamp da Kenzie Academy");

console.log(((10 + ((2 / 25) * 2)) / 2) * 2);

let a = 25;
let b = "Abacaxi";
let c = 25.36;
let d = true;
let e = [25, 36, 25.89, "Carambola", true, false];

console.log(`valor: ${e}`);
console.log(`valores: ${a} + ${b}`);
console.log(`valores: ${a} + ${c} = ${a+c}`);

// ------

let idade = 22;
let idade02 = 19;

if(idade < 18){
    console.log("Você é de menor!")
} else{
    console.log("Você é maior de idade!")
}


// ------


let x = 5;
let y = "55";
let z = 60;

if(x == y){
    console.log(`Valores: ${x} e ${y}`)
    console.log("Eles são iguais.")
}
else if(x === y){
    console.log(`Valores: ${x} e ${y}`)
    console.log("Eles são exatamente iguais.")
}
else if(x == z){
    console.log(`Valores: ${x} e ${z}`)
    console.log("Eles são iguais.")
}
else if(x === z){
    console.log(`Valores: ${x} e ${z}`)
    console.log("Eles são exatamente iguais.")
}
else{
    console.log(`Valores: ${x} e ${y} e ${z}`)
    console.log("Eles não se enquadram!")
}

// ----- 

let boxArray_01 = [25, 36, 45];
let boxArray_02 = ["Abacaxis","Banana", "Maçã"];
let boxArray_03 = [boxArray_01, boxArray_02];

console.log(boxArray_03);
console.log(boxArray_02);
console.log(boxArray_01);

console.log(boxArray_02[2]);
boxArray_03.push("Caixa");

console.log(boxArray_03);

boxArray_03.pop();

console.log(boxArray_03);
boxArray_03.unshift("Caixa");
console.log(boxArray_03);
boxArray_03.shift();
console.log(boxArray_03);


// ----- 


for(let i = 10; i >= 0; i--){
    console.log(`Kenzie: ${i}`);
}


// -----

for(let i = 0; i < 10; i++){
    console.log(`Kenzie: ${i}`);
}


// -----

let stats = ["SP", "RJ", "AM", "RR", "PA", "RO", "DF", "SC", "PR", "AC"];

for(let indice = 0; indice < stats.length; indice++){
    console.log(stats[indice]);
}


// ----- 



let Meu_copo = {
    cor: "Branco",
    tamanho: "Médio",
    peso: 0.100,
    preco: 5.58
};

let Meu_hamburgue = {
    id: 001,
    nome: "x-dougão",
    preco: 85.99,
    disponivel: true,
    ingredientes: ["Pão", "Queijo", "Presunto", "Alface", "Tomate", "Cebola", "Salsicha", "Bacon", "Ovo", "Maionese"]
};

console.log(Meu_hamburgue.id);
console.log(Meu_hamburgue.nome);
console.log(Meu_hamburgue.preco);
console.log(Meu_hamburgue.disponivel);
console.log(Meu_hamburgue.ingredientes[0]);
console.log(Meu_hamburgue.ingredientes[1]);
console.log(Meu_hamburgue.ingredientes[2]);
console.log(Meu_hamburgue.ingredientes[3]);
console.log(Meu_hamburgue.ingredientes[4]);
console.log(Meu_hamburgue.ingredientes[5]);
console.log(Meu_hamburgue.ingredientes[6]);
console.log(Meu_hamburgue.ingredientes[7]);
console.log(Meu_hamburgue.ingredientes[8]);
console.log(Meu_hamburgue.ingredientes[9]);

console.log(`O meu lanche ${Meu_hamburgue.nome} é muito bom!!!
Ele custa R$:${Meu_hamburgue.preco}
`);


document.write('<h1>Curso de JS</h1>');
document.write('<p>Jackson Douglas de Souza</p>');

// ------



function multiplyList(arrayId, multiValue){
    let multiplicados = [];

    for(let indice = 0; indice < arrayId.length; indice++){
        multiplicados.push(arrayId[indice] * multiValue);
    }

    return multiplicados;

}

let numerosExercicio = [1, 2, 3, 4, 5];
let multiplicador = 3;
let retorno = multiplyList(numerosExercicio, multiplicador)
console.log(retorno);

// -----


function positivesNumber(arrayValues){
    for(let indice = 0; indice < arrayValues.length; indice++){
        if(arrayValues[indice] < 0){
            arrayValues[indice] = 0;
        }
    }
}

let numerosTeste = [1, 50, -600, 50, 985, 852, -756, 1235, -8000, -852, -963, 123, 3, 8, -78, 98, -63, 879, 3658, -20, 10, 11, 15, -85, -63, -8541, 123, 8546, 987563, 2589, -523687, -85214789, -2365897, 888, 9999, 6325, 47856, 25698, -85412365, 25698745];

positivesNumber(numerosTeste)
console.log(numerosTeste);


// ----


function numbersPares(arrayValues){
    let soma = null;
    for(let indice = 0; indice < arrayValues.length; indice++){
        if(arrayValues[indice] % 2 === 0){
            soma++;
        }
    }

    return soma;
}

let num = [2, 5, 3, 8, 0, 7, 4, 9, 1, 6]
let numeros = numbersPares(num);
console.log(`Existe ${numeros} números pares dentro deste Array`);


// -----


function somaCincoImpares(arrayValues){
    let contagem = null;
    let soma = null;

        for(let indice = 0; indice < arrayValues.length; indice++){
            if(arrayValues[indice] % 2 !== 0){
                soma += arrayValues[indice];
                contagem++;
            }
            if(contagem === 5){
                break;
            }
        }

    return soma;
}

let arrayNumeros = [2, 3, 7, 10, 13, 18, 20, 32, 33, 40, 44, 75, 52, 63, 52, 41];

let totalValor = somaCincoImpares(arrayNumeros);

console.log(totalValor);

// -----


function valoresMaxMatrix(matrixValues){
    let max = matrixValues[0][0];
    let maxLinha = 0;
    let maxColuna = 0;

    for(let indice = 0; indice < matrixValues.length; indice++){

        for(let jindice = 0; jindice < matrixValues.length; jindice++){

            if(matrixValues[indice][jindice] > max){
                max = matrixValues[indice][jindice];
                maxLinha = indice;
                maxColuna = jindice;
            }
        }

    }

    console.log(`O maior valor é: ${max}, está na linha ${maxLinha} e coluna ${maxColuna}`);
}

let arrayMatrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 9850, 96, 97, 98, 999, 100]
];

valoresMaxMatrix(arrayMatrix);


// ----- 


let matrix = []; // declara uma matriz vazia

for (let i = 0; i < 5; i++) { // percorre as linhas da matriz
        let row = []; // declara uma linha vazia
        for (let j = 0; j < 5; j++) { // percorre as colunas da matriz
            if (i === j) { // se estiver na diagonal principal
            row.push(1); // atribui o valor 1
            } else { // caso contrário
            row.push(0); // atribui o valor 0
        }
    }
    matrix.push(row); // adiciona a linha à matriz
}

console.log(matrix); // escreve a matriz obtida

// ----- 


function maiores10(matrixValues) {
    let contador02 = 0; // declara um contador inicialmente como 0

    for (let i = 0; i < matrixValues.length; i++) { // percorre as linhas da matriz

        for (let j = 0; j < matrixValues[i].length; j++) { // percorre as colunas da matriz
            
            if (matrixValues[i][j] > 10) { // se o valor for maior que 10
                contador02++; // incrementa o contador
            }

        }
    }

    return contador02; // retorna o contador
}

// exemplo de uso
let matrix02 = [
    [2, 5, 8, 12, 6, 3],
    [4, 11, 1, 7, 9, 14],
    [10, 17, 6, 3, 20, 5],
    [2, 15, 9, 12, 18, 7],
    [13, 5, 8, 11, 16, 4],
    [1, 3, 7, 9, 2, 14]
];

let contador001 = maiores10(matrix02);
console.log(contador001);


// ----- 



function buscarValor(matriz, valor) {
    
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            
            if (matriz[i][j] === valor) {
                console.log(`O valor ${valor} foi encontrado na linha ${i} e na coluna ${j}.`);
                return;
            }
        }
    }
    
    console.log(`O valor ${valor} não foi encontrado dentro da matriz.`);
}

let matrixVinte = [
    [28, 4, 67, 13, 48, 27, 72, 35, 59, 78, 96, 52, 81, 46, 58, 25, 36, 63, 31, 54],
    [68, 11, 7, 94, 71, 75, 99, 97, 9, 90, 55, 3, 60, 23, 89, 44, 79, 56, 51, 64],
    [77, 57, 74, 39, 40, 87, 33, 73, 14, 16, 26, 15, 12, 98, 83, 41, 6, 70, 24, 65],
    [85, 76, 69, 47, 37, 29, 17, 10, 61, 30, 84, 53, 50, 66, 95, 1, 91, 45, 38, 20],
    [19, 21, 42, 2, 34, 43, 80, 88, 62, 49, 92, 8, 32, 18, 86, 93, 5, 22, 82, 100],
    [11, 39, 51, 57, 97, 58, 93, 33, 6, 50, 42, 61, 31, 77, 60, 54, 23, 78, 46, 41],
    [70, 16, 7, 68, 4, 95, 14, 63, 84, 3, 88, 87, 21, 47, 99, 81, 59, 36, 66, 35],
    [96, 34, 75, 13, 19, 55, 98, 62, 72, 85, 90, 92, 80, 69, 2, 79, 91, 43, 15, 48],
    [9, 64, 29, 71, 40, 18, 28, 12, 25, 76, 20, 38, 83, 53, 56, 1, 50, 49, 24, 30],
    [82, 5, 26, 44, 67, 8, 32, 22, 27, 86, 65, 37, 10, 52, 45, 73, 89, 61, 94, 41],
    [77, 67, 69, 42, 30, 95, 13, 34, 76, 54, 81, 40, 57, 28, 73, 3, 9, 51, 26, 66],
    [14, 27, 50, 60, 96, 83, 6, 11, 32, 44, 70, 72, 52, 39, 53, 48, 89, 25, 2, 4],
    [74, 20, 38, 87, 94, 90, 16, 33, 1, 23, 99, 64, 78, 75, 58, 56, 36, 29, 46, 49],
    [55, 92, 10, 79, 21, 47, 65, 8, 68, 63, 61, 17, 71, 43, 41, 91, 24, 98, 85, 19],
    [31, 45, 82, 37, 28, 5, 86, 22, 15, 80, 18, 35, 66, 73, 7, 27, 58, 90, 77, 16],
    [2, 83, 80, 22, 94, 81, 62, 12, 39, 55, 48, 36, 99, 32, 20, 71, 74, 14, 29, 10],
    [46, 44, 51, 77, 67, 70, 33, 25, 79, 60, 18, 31, 62, 42, 50, 29, 96, 88, 83, 24],
    [52, 21, 90, 59, 43, 56, 47, 53, 28, 87, 38, 6, 97, 69, 26, 40, 68, 49, 12, 91],
    [9, 61, 75, 54, 37, 98, 72, 45, 86, 64, 57, 19, 84, 34, 30, 93, 35, 78, 50, 41],
    [1, 16, 95, 85, 63, 89, 11, 92, 3, 7, 76, 66, 69, 32, 49, 48, 77, 42, 38, 23]
];

buscarValor(matrixVinte, 5);
buscarValor(matrixVinte, 10);


// ------ 


/* Crie uma função que receba um array com a idade de dez pessoas. Calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos. */

let idades = [20, 16, 18, 25, 32, 14, 22, 19, 17, 21];

function calcularMaioresDeIdade(idades) {
    let maioresDeIdade = 0;
    
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            maioresDeIdade++;
        }
    }
    console.log(`Quantidade de maiores de idade: ${maioresDeIdade} pessoas`);
}

calcularMaioresDeIdade(idades);

//----- 

/* Crie uma função que receba um array com dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90 */

let array_Numeros = [10, 20, 30, 40, 45, 50, 60, 68, 70, 72, 79, 80, 82, 86, 87, 90, 100];

function NumerosEntre30e90(numeros) {
    let quantidade = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i] > 30 && numeros[i] < 90) {
            quantidade++;
        }
    }
    console.log(` A Quantidade de números entre 30 e 90 é de: ${quantidade} números`);
}


NumerosEntre30e90(array_Numeros);


// ----- 


/* Crie uma função chamada areOlder que recebe a idade de uma pessoa e retorna um boolean (true ou false) se a pessoa é de maior ou não */


function areOlder(idade) {
    
    if (idade >= 18) {
        console.log("Resultado - TRUE - Você é maior de idade!");
        return true;
    } else {
        console.log("Resultado - FALSE - Você não é maior de idade!");
        return false;
    }
}
    
console.log(areOlder(16));
console.log(areOlder(17));
console.log(areOlder(18));

// ----- 


/* Crie uma função chamada isPrime que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o seja primo e Falso em caso contrário. */ 


function isPrime(numero) {

    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(715));
console.log(isPrime(80));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(1113));
console.log(isPrime(11111));
console.log(isPrime(133));

/* ***** */


/* Crie uma função chamada isPerfect que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano. */

function isPerfect(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
        
        if (num % i === 0) {
            sum += i;
        }
    }
    
    return sum === num;
}

console.log(isPerfect(28));
console.log(isPerfect(3));
console.log(isPerfect(496));
console.log(isPerfect(5));
console.log(isPerfect(6));
console.log(isPerfect(7));
console.log(isPerfect(8128));
console.log(isPerfect(9));
console.log(isPerfect(10));
console.log(isPerfect(11));
console.log(isPerfect(12));
console.log(isPerfect(33550336));
console.log(isPerfect(14));

// ----- 