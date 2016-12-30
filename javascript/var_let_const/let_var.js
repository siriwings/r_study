/**
 * Created by siri on 2016-12-24.
 */
if (true) {
    var varVariable = 1;
    let letVariable = 2;
}

console.log(varVariable); // === 1
//console.log(letVariable); // Uncaught Reference Error


let myArray = [0,1,2,3,4,5],
    length = myArray.length;


for (let i = 0 ; i < length ; i++) {
    if (myArray[i] > 3) {
        break;
    }
}
// console.log(myArray[i]);


/*
    let이나 const 키워드로 같은 변수명, 또는 상수명 정의 시 에러 발생.
 */
var duplicatedName = "This is with var";
var duplicatedName = "No problem";
//let duplicatedName = "Syntax error will be raised"; // Error
