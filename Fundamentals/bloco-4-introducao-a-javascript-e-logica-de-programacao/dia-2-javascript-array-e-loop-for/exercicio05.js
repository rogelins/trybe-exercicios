let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for(i = 1; i < numbers.length; i += 1) {

    console.log(numbers[i])

    if (maior < numbers[i]) {

        console.log(numbers[i]);
        console.log(maior);
        maior = numbers[i];
    }
}
console.log(maior);