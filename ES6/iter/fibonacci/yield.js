var fibonacci = {
    maxStep: 20,
    *[Symbol.iterator]() {
        var previous = 0,
            current = 1,
            step = 0,
            maxStep = this.maxStep;

        while (step++<maxStep){
            [previous,current]=[current,previous+current];
            yield current;
        }
    }
};

for (var fibonacciNumber of fibonacci) {
    console.log(fibonacciNumber);
}