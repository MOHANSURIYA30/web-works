const fs=require('fs');
const detail={
name:'mohan',
age:22
}
const parseData =JSON.stringify(detail);
console.log(parseData);
const data =JSON.parse(parseData);
console.log(data.age);
fs.appendFileSync("my.json",parseData);
const bb=fs.readFileSync('my.json');
console.log(bb.toString());
