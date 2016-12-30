var _promise1 = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('ok1');
            resolve(param);
        }, 100);
    });
};
var _promise2 = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('ok2');
            resolve(param);
        }, 100);
    });
};

var param = false;
_promise1(param)
    .then(function (param) {
        if (param) {
            return _promise2(true)
        } return true
    }).then(function() {
    console.log('ok3')
});

// param === true
// Result
// ok1
// ok2
// ok3

// param === false
// Result
// ok1
// ok3