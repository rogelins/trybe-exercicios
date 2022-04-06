const a = 1;
const b = 110;
const c = 50;

if(a > b) {
    console.log(a);
}
else{
    console.log(b);
}

if(a > b && a > c) {
    console.log(a);
}
else if(b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}
