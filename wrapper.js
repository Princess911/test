// 包装器对象

//  1.当做构造函数
let bool = new Boolean(true);
console.log(typeof bool);  // 'object'
console.log(bool === true);  // false
console.log(bool.valueOf());  // true
console.log(bool.toString());   // true

// 2.当做函数来用
let a = Boolean(true);
console.log(a);

// 0, undefined, null, '', NaN
const oStudent = {};

if (oStudent.name) {
    console.log('hello');
}


// Number
let num = new Number(123);
console.log(num.length);

let b = Number.parseInt(112121.001);
console.log(b);

let c = Number.parseFloat("123.00");
console.log(c);
console.log(Number.isInteger(c));

let d = Number.isInteger(123.8);
console.log(d);

// String 对象

let e = String.fromCharCode(97);
e = String.fromCodePoint('0x10');
console.log(e);
let d = 'xiaojichao';
console.log(d.slice(1,3));
console.log(d);

d.concat('xiao');