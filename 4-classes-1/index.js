const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname,'index.json')
const pathToCSV = path.resolve(__dirname,'products.csv');

const data = fs.readFileSync(pathToCSV,'utf8');

const items = data.split(', ');

// console.log(items)

function ObjectItem (arr) {
  const value = arr.split(' ')
  this.title = value[1]
  this.price = {}
  this.price.rubles = Number(value[0]);
  this.price.dollars = Number((value[0] / 67).toFixed(2));
}

const products = items.map(item => new ObjectItem(item));
// let finalResult = [];
// finalResult.push(products);
var finalResult = JSON.stringify(products)
console.log(finalResult)
fs.writeFileSync(pathToCSV,finalResult,'utf8');

// fs.writeFileSync(pathToJSON,data,'utf8')
