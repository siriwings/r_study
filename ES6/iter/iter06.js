/**
 * Created by siri on 2016-12-30.
 */

//Laze in Nature

var foo = {
    [Symbol.iterator]: () => {
        var i = 0
        return { next: () => ({ value: ++i }) }
    }
}

for (let pony of foo) {
    if (pony > 10) {
        break
    }
    console.log(pony)
}

//미리 값을 만들지 않고 함수가 호출되는 시점에 값을 만든다.