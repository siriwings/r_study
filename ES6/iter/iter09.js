/**
 * http://putaindecode.io/en/articles/js/es2015/iterators/
 * http://exploringjs.com/es6/ch_iteration.html
 */
const arr = ["a", "b"];
const iteratorArray = arr[Symbol.iterator]();
console.log(iteratorArray.next());
iteratorArray.next();
// -> Object {value: "a", done: false}
iteratorArray.next();
// -> Object {value: "b", done: false}
iteratorArray.next();
// -> Object {value: undefined, done: true}