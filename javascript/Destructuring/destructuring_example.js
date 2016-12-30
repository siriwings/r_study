/**
 * Created by siri on 2016-12-29.
 */
function destructArray([first, second]) {
    console.log("Inside destructArray function: " + first + " , " + second);
    return [first + second, first - second, first * second, first / second];
}

function destructObject({name, gender}) {
    console.log("Inside destructObject function: " + name + " , " + gender);
    return {
        greetings: "Hello, " + name,
        sayHello() {
            console.log("sayHello function: Hello, " + name);
        }
    };
}

var [sum, sub, mul, div] = destructArray([1 , 2]);
console.log(`Return value of destructArray: ${sum}, ${sub}, ${mul}, ${div}`);

var {greetings, sayHello} = destructObject({name: "Unikys", gender: "Male"});

console.log(`greetings : ${greetings}`);
sayHello();