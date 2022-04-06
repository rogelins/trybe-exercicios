const ang1 = 60;
const ang2 = 60;
const ang3 = 80;

trianguloValido = ang1 + ang2 + ang3;

if(trianguloValido == 180) {
    console.log(true);
}
else if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Angulo Invalido");
}
else{
    console.log(false);
}