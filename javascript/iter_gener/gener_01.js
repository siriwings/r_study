/**
 * https://ponyfoo.com/articles/es6-generators-in-depth
 * https://egghead.io/lessons/ecmascript-6-generators
 */

let generator = function* (arg) {

    while (arg.length!=0){
        yield arg.shift(); //value에 해당하는 것을 보냄. yield구문이 이터레이터 객체를 만들어줌.
    }

//while문이 끝나면 자동으로 done을 true로 만든 객체를 리턴한다.
};

/*
for (let pony of generator(['p', 'o', 'n', 'y', 'f', 'o', 'o'])){
    console.log(pony);
}
*/

/*
* If we assign something like a hello to this generator()
* and then we see what the hello is you can see
* that the hello is actually an object so it did not invoke this.
* It actually created an object which I can call next() on.
* When I call hello.next(), and I'll just call this next and log that out.
* You can see that next is {value: ~~~~, done: ~~~~~}.
* http://gracefulife.xyz/220742571986
*/

//hello는 generator 객체가 됨.
let hello = generator(['p', 'o', 'n', 'y', 'f', 'o', 'o']);
console.log(hello);
let next = hello.next();
console.log(next);
let next2= hello.next();
console.log(next2);

console.log(hello.next());
console.log(hello.next());
console.log(hello.next());
console.log(hello.next());
console.log(hello.next());
console.log(hello.next());
