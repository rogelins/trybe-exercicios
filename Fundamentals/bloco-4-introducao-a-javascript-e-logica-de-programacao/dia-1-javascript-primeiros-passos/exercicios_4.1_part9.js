const a = 21;
const b = 41;
const c = 81;

verImparDois = (a + b) % 2;
verImparTres = (a + c) % 2;
verImparQuatro = (b + c) % 2;
algumImpar = (a + b + c) % 2;

console.log(verImparDois);
console.log(verImparTres);
console.log(verImparTres);
console.log(algumImpar);

if(verImparDois == 1 || verImparTres == 1 || verImparQuatro == 1 || algumImpar == 1) {
    console.log(true);
}
else{
    console.log(false);
}