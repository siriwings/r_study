/**
 * Created by siri on 2016-12-30.
 */
function* greet(){
    console.log(`You called 'next()'`);
    yield "foo";
    console.log('jinsil');
}


//greeter는 제너레이터 객체가 됨.
let greeter = greet();
//console.log(greeter); // { next: [Function], throw: [Function] }

console.log(greeter.next());
//console.log(greeter.next());


/*let next=greeter.next();
console.log(next);
let done=greeter.next();
console.log(done);*/