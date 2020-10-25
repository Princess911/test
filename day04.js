// 字面量
let a = '', b = '', c = '';//字符串字面量
let

/*
定义函数的四种方式

*/
//函数声明
function sayHello() {
    console.log('Hello javaScript');
}//定义了一个函数字面量
//函数表达式
const sayHello = function () {
    console.log('Hello javaScript')
}//函数表达式
const sayHello = function () {
    console.log('Hello JS')
}//函数表达式

// function 构造函数
const sayHello = new Function("console.log('Hello,JS!')");

// ES6 新增语法  箭头函数
const sayHello = () => { console.log('Hello JS') };

sayHello();

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return;
};
console.log(sayHello());  //undefined

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return c; 1
};
console.log(sayHello());  //3;

// 函数的参数
const add = function (a, b) {
    return a + b;

}
let a = add(2, 3);
console.log(a);

const add1 = function (a, b) {
    return a + b;
};


let b1 = add1();
console.log(b);// NaN = not = number,undefined + undefined 
let b2 = add1(1); //只传一个参数
console.log(b1);// NaN

let b3 = add1(1, 2, 3, 4);
console.log(b3); //3


const add2 = function (a, b) {
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[5]);
    return a + b;
};

let b4 = add2(1, 2, 2, 2, 3, 4);
console.log(b4);


const add3 = function () {
    let sum;
    for (const i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
};

let b5 = add3(1, 2, 4, 5, 7, 8);
console.log(b5);

const add = function (...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
};

let a1 = add(1, 2, 3);
console.log(a1);


// 默认参数
const sayHi = function (studentName = 'JS') {
    console.log('hello,${studentName}');
}
sayHi();
sayHi('Java');


//箭头函数
const add1 = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}


console.log(add1(1, 1, 2));

const add = function (a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;
const add3 = () => { return 3; }

const add4 = a => a + 1;
const add4 = function (a) {
    return a + 1;
}


// callback
function dance() {
    console.log('我在跳舞')
}

function sing(song, callback) {
    console.log('我在唱${song}');
    if (typeof callback)= = 'function'{


        callback();
    }
}
sing("国歌", dance);
//改写成函数表达式
const dance = function () {
    console.log('我在跳舞');
}

function sing(song, callback) {
    console.log('我在唱${song}');
    if (typeof callback)= = 'function'{


        callback();
    }
}
sing("国歌", dance);

//改写成箭头函数版本
const dance = () => { console.log('我在跳舞') }
const sing = (song, callback)



//用箭头函数作为回调函数
const dance = function () {
    console.log('我在跳舞');
}

function sing(song, callback) {
    console.log('我在唱${song}');
    if (typeof callback)= = 'function'{


        callback();
    }
}
sing("国歌", dance);


//1。数组的排序 Array,sort()
const oArray = [1, 10, 2, 11, 9, 8]
console.log(oArray.sort());

const num = (a, b) => a - b;
console.log(oArray.sort(num));


//forEach
const colors = ['Red', 'Green', 'Blue'];
for (let i = 0, max = colors.length; i < max; i++) {
    console.log('位置${i}处的颜色为${colors[i]}');
}

const colors = ['Red', 'Green', 'Blue'];
colors.forEach(
    (color, index) => console.log('位置${i}处的颜色为${colors[i]}')

);
const oArray1 = [1, 2, 3, 4]
oArray1.forEach((color) => console.log('${color}'))


//map
const oArray2 = [1, 2, 3, 4];
const oArray3 = oArray2.map((x) => x + 2);
console.log(oArray3);

//改写
//先定义一个数组，然后得到一个新数组，
//新数组中每一个元素都是旧数组中每一个元素的平方，不用map版本
const a1 = [1, 2, 3]
let a2 = []
for (let i = 0; i < a1.length; i++) {
    a2[i] = aa1[i] * a1[i]
}
console.log(a2);
//map版本
let a1 = [1, 2, 3];
let a2 = a1.map((x) => x * x);
console.log(a2);
//reduce
const a1 = [1, 2, 3]
const a2 = a1.reduce(
    (sum, curVa1) => sum + curVa1
)
console.log(a2);
console.log(typeof a2)
const a2 = [1, 2, 3].reduce((sum, curVa1) => sum + curVa1, 0);
console.log(a2);   //  6

const a2 = [1, 2, 3].reduce((sum, curVa1) => sum + curVa1, 10);
console.log(a2);   //  16

const sentence = 'The quick brown 中国 fox jumped over the lazy dog';
const words = sentence.split("")
console.log(words);

const lenOfWords = words.reduce(
    (sum, va1) => sum + va1.length, 8
)
console.log(lenOfWords);


//filer
const a1 = [1, any, 4, 5, 6, 7, 8]
const a2 = a1.filter((a) => a % 2 === 0)
console.log(a2);

const sentence = 'The quick brown 中国 fox jumped over the lazy dog';
const words = sentence.split("");
console.log(words);
const words1 = words.filter((va1) => va1.length > 4);
console.log(words1);


const a = [1, 2, 3].map((x) => x * x).reduce((acc, x) => acc + x);
console.log(a);