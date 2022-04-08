//eu coloquei o let após o for não deu erro, mesmo que eu não coloque o let não dá o erro, qual a diferença? o que pode ocorrer de problema?

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}