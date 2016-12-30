/**
 * Created by siri on 2016-12-29.
 */
var myArray = [1 , 2 , 3 , 4 , 5];
var [a , b , , c , d] = myArray;
console.log("Array shorthand: " + a + " , " + b + " , " + c + " , " + d);

[a , b] = [b , a];
console.log("Swap: " + a + " , " + b);

var myObject = {
    name: "Unikys",
    gender: "Male",
    job: "Programmer"
};

var {name, gender, job} = myObject;
console.log("Object shorthand: " + name + " , " + gender + " , " + job);