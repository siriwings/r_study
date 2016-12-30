/**
 * Created by siri on 2016-12-30.
 */
var iterFibonacci = function* (maxStep) {
    var previous = 0,
        current = 1,
        step = 0;

    while (step++ < maxStep) {
        [previous, current] = [current, previous + current];
        yield current;
    }
};

for (var fibonacciNumber of iterFibonacci(20)) {
    console.log(fibonacciNumber);
}

var fibonacciResult = [...iterFibonacci(20)];
console.log(fibonacciResult);
var [n1, n2, n3, n4, n5, ...rest] = iterFibonacci(20);
console.log(n1 + " , " +  n2 + " , " +  n4 + " , " + n5 + " , " + rest);