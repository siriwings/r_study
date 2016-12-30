/**
 * Created by siri on 2016-12-29.
 */
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.add("some text");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

console.log("mySet.size : " +mySet.size);

for (let item of mySet) console.log(item);

