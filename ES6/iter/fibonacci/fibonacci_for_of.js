var fibonacci = {
    maxStep: 20,
    [Symbol.iterator]() {
        var previous = 0,
            current = 1,
            step = 0,
            maxStep = this.maxStep;
        return {
            next () {
                [previous, current] = [current, previous + current];
                return {done: step++ >= maxStep, value: current};
            }
        };
    }
};

for (var fibonacciNumber of fibonacci) {
    console.log(fibonacciNumber);
}