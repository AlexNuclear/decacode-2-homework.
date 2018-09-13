// const path = require('path');
// const fs = require('fs');
//
// const pathToJSON = path.resolve(__dirname, 'index.json');
// const data = fs.readFileSync(pathToJSON, 'utf8');
//
// const parsedData = JSON.parse(data);
// console.log(parsedData);
// const count = parsedData.length;
//
// console.log('Количество пользователей: ' + count);
//
//  let avAge = 0
//  function getAverageAge (object) {
//
//     let totalAge = parsedData.reduce((acc, elem) => acc + elem.age, 0);
//     let avAge = totalAge/parsedData.length;
//     return avAge
// }
// getAverageAge(parsedData);
// console.log('Средний возраст пользователей: ' + avAge);
//////////// Спросить,почему avAge не обновляется -------- Отбой,разобрался

const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

const parsedData = JSON.parse(data);
const count = parsedData.length;
//---------Кол-во пользователей
console.log('Количество пользователей: ' + count);
//--------- Средний возраст
avAge = getAverageAge(parsedData)

 function getAverageAge (object) {
    let totalAge = parsedData.reduce((acc, elem) => acc + elem.age, 0);
    let avAge = totalAge/parsedData.length;
    return avAge
}

console.log('Средний возраст пользователей: ' + avAge);
//---------- возраст,имя

 let ageName = getAgeName(parsedData);
function getAgeName(object) {
  let ageNameArr = object.map((obj) => obj.age + ' ' + obj.name)
  return ageNameArr.join(' ');
}

console.log(ageName)

// Интересная была задумка сделать через 2 массива,но чет чувствую,что в 12:20 ночи не вывезу.Не могу понять,как объеденить каждый элемент массива поочередно

// function getAgeName(object) {
//   let nameArr = [];
//   let ageArr = [];
//   object.map((obj) => nameArr.push(obj.name ))
//   object.map((obj) => ageArr.push(obj.age ))
// }
// getAgeName(parsedData);

// интересная задумка end

//---------- Художники


const painters = parsedData.filter(man => man.skills.includes('Paint')).map(man => man.name);

console.log(painters)

// dataParsed.filter((user) => user.skills.includes(`Paint`)).map((user) => user.name);
