/**
 * 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함.
 */
function func(arg1,arg2) {
    console.log(arg1,arg2);
}

//정의된 함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined 값 할당.
func();
func(1);

func(1,2);  //정상

func(1,2,3);    //초과된 인수는 무시.

/**
 * 크롬 브라우저로 arguments 객체 보기.
 */

function add(a,b) {
    //arguments 객체 출력
    console.dir(arguments);
    return a+b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

/**
 * apply()메서드를 활용한 arguments객체의 배열 표준 메서드 slice()활용 코드
 */


function myFunction() {
    console.dir(arguments);

    //arguments 객체를 배열로 변환
    //var args = Array.prototype.slice.apply(arguments);    //기존
    let args = Array.from(arguments);   //ES6
    console.dir(args);

}

myFunction(1,2,3);
