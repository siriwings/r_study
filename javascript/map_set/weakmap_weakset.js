/**
 * Created by siri on 2016-12-29.
 */
var weakSet = new WeakSet(),
    weakMap = new WeakMap(),
    obj = {
        name: "Unikys"
    },
    val = {
        language: "javascript"
    };

var myObj={};

weakMap.set(myObj,'dog');
weakSet.add(obj);
weakMap.set(obj, val);

console.log(weakMap.get(myObj));
console.log(weakMap.get(obj));


console.log(weakSet.has(obj));
console.log(weakMap.has(obj));

obj = null;
console.log(weakMap.get(obj));
console.log(weakSet.has(obj));
console.log(weakMap.has(obj));