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