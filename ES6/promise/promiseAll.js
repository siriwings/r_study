/**
 * Created by siri on 2016-12-29.
 */
var promise1 = new Promise(function (resolve, reject) {

    // 비동기를 표현하기 위해 setTimeout 함수를 사용
    setTimeout(function () {

        // 해결됨
        console.log("첫번째 Promise 완료");
        resolve("11111");

    }, 6000);
});

var promise2 = new Promise(function (resolve, reject) {

    // 비동기를 표현하기 위해 setTimeout 함수를 사용
    setTimeout(function () {

        // 해결됨
        console.log("두번째 Promise 완료");
        resolve("222222");

    }, 2000);
});


Promise.all([promise1, promise2]).then(function (values) {
    console.log("모두 완료됨", values);
});
