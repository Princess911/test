// 正则表达式字面量
const pattern = /javascript/;
let a = pattern.test('javascript');
console.log(a);

const pattern1 = new RegExp('javascript');
let b = pattern1.exec('javascript');
console.log(b);


const pattern = new RegExp('[a-zA-Z]+ing');
console.log(pattern.test('joke')); // false
console.log(pattern.test('joking')); // true
console.log(pattern.exec('joking')); // [ 'joking', index: 0, input: 'joking', groups: undefined ]

/dog/.test('hot dog'); // true

/d.g/.test('dog');   // true

/^dog/.test('adog') // false


