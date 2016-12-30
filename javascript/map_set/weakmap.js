/**
 * Created by siri on 2016-12-28.
 */
var myMap = new WeakMap();

//API
/*
 set()
 get()
 size
 clear()
 has()
 */

var myObj = {};
var myFunc =function () {};

myMap.set(myObj,'dog');
myMap.set(myFunc,'cat');
//myMap.set('string',2);

//myMap.set('foo','bar');
//myMap.set('hello','world');

//myMap.clear();
console.log(myMap.get('foo'));
console.log(myMap.get('jinsil'));

console.log(myMap.has('bar'));  //해당 key가 있는지 확인. boolean값 반환.
console.log(myMap.size);

//Iterators
/*
 keys()
 entries()
 values()
 */

//for-of loop
/*
for(var value of myMap.values()){
    console.log(value);
}

for(var key of myMap.keys()){
    console.log(key);
}
*/
for(var [key,value] of myMap.entries()){
    console.log(key+' = '+value);
}
