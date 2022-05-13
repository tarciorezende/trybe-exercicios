//Exercicio 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio=0;
let media;
let maior=numbers[0];
let menor=numbers[0];
let impar=0;
for(index = 0; index < numbers.length; index += 1 ){
    console.log(numbers[index]);
    somatorio= somatorio+numbers[index];
    if (maior<numbers[index])
    maior=numbers[index];
    if (menor>numbers[index])
    menor=numbers[index];
    if (numbers[index]%2===1)
    impar +=1;
}
media=somatorio/numbers.length;
console.log("Somatoria é: ", somatorio);
console.log("A media é: ", media);
if (media >= 20) 
    console.log("Valor maior que 20");
else
    console.log("Valor menor que 20");
console.log("Maior valor: ", maior);    
console.log("Menor valor: ", menor);
if (impar === 0)
console.log("Nenhum numero ímpar");
else
console.log("Quantidade de numeros ímpares: ", impar);
//Exercicio 8 ao 9
var numeros = [];
for (index2 = 0; index2 < 25; index2 +=1){
    numeros[index2] = index2+1;
    console.log(numeros[index2]);
}
for (index2 = 0; index2 < 25; index2 +=1){
    console.log("Divisão do termo ",numeros[index2], "por 2 = ",numeros[index2]/2);
}
