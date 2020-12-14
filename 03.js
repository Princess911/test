// 包装器对象

let x =  new String('xyz');

console.log(x.length)    // 3
console.log(typeof x);  // 'object'
console.log(x.valueOf()); // 'xyz'
console.log(x.toString());  // 'xyz'

let b = String('123');
console.log(typeof b);

console.log('1'.toString());


// Boolean 对象
// 1.构造函数
let bool = new Boolean(true);

console.log(typeof bool);  // 'object'
console.log(bool.valueOf());   // true

// 2.转换为boolean值
Boolean(undefined); // false
Boolean(null);   // false
Boolean(0);    // false

let a;
if (Boolean(a)) {
    console.log(a);
}


// Number

let c = new Number(123);
console.log(typeof c);   // 'object'

// for (const p in c) {
//     console.log(p);
// }

Number.isNaN('1212s');

//console.log((345).toLocaleString('zh-hans-CN-u-nu-hanidec'));
// Number.toString();

let s1 = 'xyz';
let s2 = new String('xyz');
console.log(typeof s1) // 'string'
console.log(typeof s2) // 'object'
s2.valueOf() // 'xyz'
console.log(s2.length); // 3
console.log(s2[1]); // y



