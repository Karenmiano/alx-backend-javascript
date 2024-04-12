const assert = require('assert');
var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
console.log(assert(myObj.foo === 'bar'));
console.log(assert(myObj[fooSym] === 'baz'));
console.log(assert(myObj[otherSym] === 'bing'));
Object.getOwnPropertyNames(myObj); // -> [ 'foo' ]
Object.getOwnPropertySymbols(myObj); // -> [ Symbol(foo) ]

