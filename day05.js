//...day04 homework
function mean(a,b,c) {
    return (a+b+c)/3
}

console.log(mean(1,2,3));

function mean(...args) {
    let sum = 0;
    for (let arg of args) {
        sum = arg + sum
    }
    return sum /3
}

console.log(mean(1,2,3))


function mean(...args) {
    return args.reduce((acc,val) => acc + val) / args.length;
}

console.log(mean(1,2,3))


function mean(...args) {
    return args.filter(x => x%2 == 0).reduce((acc,val) => acc + val) / args.length;
}

console.log(mean(1,2,3,4))

//1.js
const b = 2
function greeting() {
    const a = 1 + b
    return 'hi'
  }
function sum(a,b,c){
    console.log (arguments)
    return a+b+c
}
sum(1,2,3)

console.log(this)


const person = {
    name:"hzz",
    birthyear:"1999",
    calcAge:function(){
        console.log(2020-this.birthyear)
    }
}
person.calcAge();
const calculateAge = person.calcAge;
calculateAge();

let x = 10;
let y = 20;
function foo(z) {
  let x = 100;
  return x + y + z;
}
foo(30); // 150

let a = 20; //未初始化
const b = 30;  //未初始化
var c; //undefined
function multiply(e, f) { // e = 20 , f = 30
  var g = 20;
  return e * f * g; // 20*30*20=12000
}
c = multiply(20, 30);
console.log(a)
console.log(b)
console.log(c)


function multiply(e, f) { // e = 20 , f = 30
    var g = 20;
    return e * f * g; // 20*30*20=12000
  }
var c;

let  a = 20;
const b = 30 ;
c =multiply(20,30)
console.log(c)

//全局EC：1.创建：1.this :全局对象
//               2.outer：null
//               3.ER : 1.
//                      2.
//                      3.
//       2. 执行
//函数EC:1.创建
//       2.执行


console.log(sayHello)
console.log(strMessage)
console.log(sayHi)
function sayHello() {
  return 'Hello, JavaScript!'
}
var strMessage = 'Hello, Freshman!'
var sayHi = function () {
  return 'Hi, JavaScript'
}

//变量提升
console.log(a)
var a = 'he'
console.log(a)


//let / const
function foo(){
    console.log(a);
    var a = 'he'
    console.log(a)
}
foo()

const name = "hzz"
const age = "21"
const city = "chengdu"

function getPersonInfo(){
    const name ="hhhhh"
    const age = 22

    return `${name} is ${age} and lives in ${city}`
}
console.log(getPersonInfo)


const name = "Lydia";
const age = 21;
const city = "chengdu"
function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  const city = "San Francisco";
  return `${name} is ${age} and lives in ${city}`;
}
console.log(`${name} is ${age} and lives in ${city}`);


const age = 21
function checkAge() {
  if (age < 21) {
    const message = "You cannot drink!"
    return message
  } else {
    const message = "You can drink!"
    return message
  }
}
//全局上下文中通过var声明的变量，会自动成为全局对象的属性；
//全局执行上下文通过函数声明定义的函数，会自动成为全局对象
let a = 1;
const b = 2;
var c = 3;

function foo(){
    console.log('hi')
}
const foo = function(){

}

//this绑定
var name =10
const foo = function () {
    console.log(this.name + 10);
}
foo();

const foo = () => {console.log(2020-this.age)}
const foo = function(){
    console.log(2020-this.age)
}
const oStudent = {
    name : 'hzz',
    age : '21',
    calcAge:foo
}
oStudent.calcAge();


