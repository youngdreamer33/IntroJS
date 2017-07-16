var serie = 1;

while (serie <= 100) {
    if (serie % 3 === 0 && serie % 5 !== 0) {
        console.log('Fizz');
    } else if (serie % 3 !== 0 && serie % 5 === 0) {
        console.log('Buzz');
    } else if (serie % 3 === 0 && serie % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(serie);
    }
    serie++;

}