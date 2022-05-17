 // Exercicio 1 fatorial de 10
 let fatorial=1;

 for(let index =1; index <=10; index += 1){
    fatorial= fatorial*index;
    console.log("fatorial de ",index, "= ", fatorial);

}

//Exercicio 2 inverter string
let str= "tryber";
function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}

console.log(inverterString("Tryber"));

//Exercicio 3