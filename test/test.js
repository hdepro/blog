/**
 * Created by heben on 2017/5/8.
 */

"use strict";
function b(x, y, a) {
    arguments[2] = 10;
    console.log(a);
}
b(1, 2, 3);

console.log([1,2,3].slice(0,undefined));
console.log("123456789".substr(2,3),"123456789".substr(-4,2),"123456789".substr(2,-3),"123456789".substr(2,0));
console.log("123456789".substring(2,3),"123456789".substring(2,0),"123456789".substring(2,-5));
console.log("123456789".slice(2,0),"123456789".slice(2,-5));