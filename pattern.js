const pattern = /javascript/;
console.log(pattern.test('javascript'));

// RegExp

const pattern1 = new RegExp('javascript');
let a = pattern1.test('javascript');
console.log(a);

/dog/.test('hot dog'); //true
/d.g/.test('dag'); //true
/d.g/.test('ddddddddg')  //true
/d.g/.test('doooog'); //false
/dog/.test('ddddoggg'); //true





