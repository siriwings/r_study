/**
 * Created by siri on 2016-12-29.
 */
const a = 12;
function myfunction(){
    const b = 13;

    if(true){
        const t = 14;
        console.log(a);
        console.log(b);
        console.log(t);
    }
    console.log(a);
    console.log(b);
    //console.log(t); //error
}

console.log(a);
//console.log(b); //error
//console.log(t); //error
myfunction();

const hello = {
    "name" : "brown"
};

console.log(hello.name); //brown

hello.name = "cony";

console.log(hello.name); //cony

//hello = {}; //error

const foo=[0,1];
const bar =foo;

foo.push(2);
bar[0]=10;

console.log(`foo : ${foo}, bar : ${bar}`);


const arg = [0,1];
const obj = {foo:'bar'};

const newArg = [...arg];
const newObj = Object.assign({},obj);

newArg[0]=10;
newObj.foo='rab';

console.log(`arg : ${arg}, newArg : ${newArg}`);

console.dir(obj);
console.dir(newObj);