/**
 * http://putaindecode.io/en/articles/js/es2015/symbols/
 */


/* Creating Symbols */

//A simple symbol
const mySymbol1 = Symbol();
console.log(typeof Symbol());
console.log(typeof mySymbol1 === 'symbol');

//A symbol with a label
const myOtherSymbol = Symbol("label");

//Each symbol is unique
const yetAnotherSymbol = Symbol("label");
console.log(yetAnotherSymbol === myOtherSymbol);



/* Symbols as keys */
const myKey = Symbol("MY_KEY");

const myMutableObject = {};
myMutableObject[myKey] = "a value";

console.log(myMutableObject[myKey]);

//Object.getOwnPropertySymbols() 함수를 통해 각 Symbol에 접근.
console.log(Object.getOwnPropertySymbols(myMutableObject));

// With *computed property keys*
const myObj = {
    [myKey]: "a value",
    [Symbol()]: "symbol-keyed value",
    "key": "string-keyed value"

}
console.log(myObj[myKey]);
console.log(Object.getOwnPropertySymbols(myObj));
console.log(Object.getOwnPropertyNames(myObj));


/* Global symbol registry */
// Returns a symbol, creating it if it doesn't already exist
const mySymbol = Symbol.for("mySymbol");

mySymbol === Symbol.for("mySymbol"); // true

// It's possible to get the key indexing a symbol in the registry
Symbol.keyFor(mySymbol); // 'mySymbol'

// Symbols not created in the registry are not available in it
Symbol.keyFor(Symbol()); // undefined