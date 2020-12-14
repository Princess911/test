// Math对象
let x = 1, y = 2, z = 3;
console.log(`最大值为：${Math.max(x,y,z)}`);

const scores = [1,2,2,32,12,3,333];
console.log(`最大值为：${Math.max(...scores)}`);

let a = Math.random() * 6;  // 0 - 1.0之间的小数
console.log(a);
console.log(Math.floor(a) + 1);   //1 - 6

// Math.floor(Math.random()*6) +1   --- 生成1-6之间的一个随机数

