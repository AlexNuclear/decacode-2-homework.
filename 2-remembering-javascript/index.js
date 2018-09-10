
// -------------------------------
// let numbers = process.argv.slice(2);
// console.log(numbers);

// for ( i=0;i<= numbers.lenght;i++) {
//   Number(numbers[i]);
// }
// let numbersSum = parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]) + parseInt(numbers[3]) + parseInt(numbers[4]);
// console.log('Сумма: ' + numbersSum);
//
// let numberMiddle = (parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]) + parseInt(numbers[3]) + parseInt(numbers[4])) / numbers.length;
// console.log('Среднее арифметическое:' + numberMiddle);

// -----------------------------------

// Вариант 1 - уродливый

// Узнать,почему не сработал перебор массива и последующее приведение типов к цифре



// Разобрался в массиве!

let numbers = process.argv.slice(2);
console.log(numbers);

let numbersSumm = 0;

for (i=0; i<numbers.length;i++) {

    numbersSumm = numbersSumm + parseInt(numbers[i], 10);
}
console.log('Сумма:', numbersSumm);

console.log('Среднее арифметическое:' + (numbersSumm / numbers.length));
//---------------------------

//
// let numbersSumm = 0;
//
// for (i=0; i<numbers.length; i++) {
//   numberSumm = numberSumm + parseInt(numbers[i],10);
// }
// console.log(numberSumm);


//----------------------------------
// --------------------------------------------------------- //

// Неудачные дубли

// let numbers = process.argv.slice(2);
// console.log(numbers);
//
// for ( i=1;i<= numbers.lenght;i++) {
//   var numbersToNumbers = [];
//   numbersToNumbers.push( Number(numbers[i]))
// }
//
// console.log(numbersToNumbers);

// var numberSumm = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
// console.log(numberSumm);
