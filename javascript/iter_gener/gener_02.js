
function* gener() {
    let arg = ['p', 'o', 'n', 'y', 'f', 'o', 'o'];
    while (arg.length>0){
        yield arg.shift(); //value에 해당하는 것을 보냄. yield구문이 이터레이터 객체를 만들어줌.
    }

//while문이 끝나면 자동으로 done을 true로 만든 객체를 리턴한다.
};


/*
 let generator = function* () {
 let arg = ['p', 'o', 'n', 'y', 'f', 'o', 'o'];
 while (arg.length!=0){
 yield arg.shift(); //value에 해당하는 것을 보냄. yield구문이 이터레이터 객체를 만들어줌.
 }

 //while문이 끝나면 자동으로 done을 true로 만든 객체를 리턴한다.
 };

*/
let generator = gener();


console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());



for (let pony of generator){
    console.log(pony);
}
