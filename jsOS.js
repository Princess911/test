let a = 'Hello World!';

function first() {
  console.log('在 first 函数内');
  second();
  console.log('再次在 first 函数内');
}
function second() {
  console.log('在 second 函数内');
}
first();
console.log('在全局执行上下文中');

let c = 2;
function foo(){
    b = 1;
    return 'hi' + c
}
foo()
console.log(b)

console.log(this)
function mean(){

}

const person = {
    name: "peter",
    birthYear: 1999,
    calcAge: function () {
      console.log(2018 - this.birthYear);
    }
};
person.calcAge();
// 'this' 指 'person'，因为 'calcAge' 是通过用 'person' 对象引用调用的。
const calculateAge = person.calcAge;
calculateAge();
// 'this' 指定全局对象，因为没有对象引用

// var a = 1;
// var b = 2;
// function foo(){

// }
// window
// a:1
// b:2
// foo:[function()]

let a = 20;
const b = 30;
var c;
function multiply(e, f) {
    var g = 20;
    return e * f * g;
}
c = multiply(20, 30);

function foo(){
    var a
    console.log(a)
    a = 1
    console.log(a)
}
foo(); //输出为undefined

const name = "Lydia";
const age = 21;
const city = "San Francisco";
function getPersonInfo() {
    const name = "Sarah";
    const age = 22;
    return `${name} is ${age} and lives in ${city}`;
}
console.log(getPersonInfo());

const name = "Lydia";
const age = 21;
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

function foo(p1,p2){
    console.log(p1+p2)
    console.log(this);
}
foo(1,2);
foo.call(null,1,2)


