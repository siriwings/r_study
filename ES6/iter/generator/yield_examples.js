/**
 * Created by siri on 2016-12-30.
 */
var myObject = {};
myObject[Symbol.iterator] = function* () {
    yield "1";
    yield* [2, 3];
    yield* "45";
    yield* innerGenerator();
    yield "9";
};

function* innerGenerator() {
    yield 6;
    yield* new Set(["7", "8"]);
}

console.log([...myObject]); // === ["1", 2, 3, "4", "5", 6, "7", "8", 9]