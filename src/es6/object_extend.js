/**
 * 对象的扩展
 */

/*
    解构赋值
 */

let {x, y, ...z} = {x:1, y:2, a:3, b:4};

console.log('x:' + x);
console.log('y:' + y);
console.dir(z);

/**
 * 合并两对象
 */

let a = {a: 1};
let b = {b: 2};

let ab = {...a, ...b};
console.dir(ab);

console.dir(Object.assign({}, a, b));