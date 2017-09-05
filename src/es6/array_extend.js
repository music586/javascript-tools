/**
 * 数组的扩展运算符
 */

console.log(...[1, 2, 3]);

console.log(1, ...[2, 3, 4], 5);

/*
    合并数组
 */

let _arr = [3, 4, 5];
console.log([1,2, ..._arr]);

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];


console.log([...arr1, ...arr2, ...arr3]);

/**
 * 与解构结合
 */

const [first, ...rest] = [1, 2, 3, 4, 5];

console.log('first: ' +  first);
console.log('rest:' + rest);

/**
 * 字符串
 */
var str = [..."hello"];
console.log('str:' + str);