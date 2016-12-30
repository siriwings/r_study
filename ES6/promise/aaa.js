/**
 * Created by siri on 2016-12-30.
 */
// an immediately resolved promise
// You can also create an immediately resolved Promise by using the Promise.
// resolve() method.
//
var p2 = Promise.resolve("foo");

// can get it after the fact, unlike events
p2.then((res) => console.log(res));

var p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});

/*
// handler can't change promise, just value
p.then((res) => {
    res += 2;
    console.log(res);
});

// still gets 4
p.then((res) => console.log(res));
*/
p.then((res) => {
    res += 2;
    console.log(res);
    return p;
}).then((res) => console.log(res));