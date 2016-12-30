let myFunc = () => console.log("This is a new function literal");
myFunc();

var myFuncES5 = function () {
    console.log("This is a new function literal");
};
myFuncES5();


let paramFunc1 = name => {
    console.log("This is my " + name);
}
paramFunc1("Jinsil");


let paramFunc2 = (greetings, name) => {
    console.log(greetings + " , " + name);
}
paramFunc2("Hello", "World");


var paramFuncES5 = function (greetings, name) {
    console.log(greetings + " , " + name);
}
paramFuncES5("Hello", "World");

/*
 object literal syntax
 */
//es5
var objLiteral1 = function(id, name){
    return {
        id : id,
        name : name
    };
};

console.dir(objLiteral1(5,"park"));

//es6
var objLiteral2 = (id, name) => ({id : id , name : name});

// 객체 리터럴 표현식을 리턴 할때는 ()로 묶어줘야한다.

console.dir(objLiteral2(4,"park"));



