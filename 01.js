const callback = function() {
    console.log('hello, timeout!')
}

let a = setTimeout(callback, 3000);
console.log(a);
clearTimeout(a)