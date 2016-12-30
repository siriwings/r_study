//반복을 위한 준비
var foo = {
    [Symbol.iterator]: () => ({
        items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
        next: function next () {
            return {
                //done이 true가 되면 loop 나옴.
                //계속 반복할지 판단.즉, 반복에 필요한 조건
                done: this.items.length === 0,


                 //반복시마다 처리할 것, 실행문
                 value:this.items.shift()

            }
        }
    })
}


//반복 행위
for (let pony of foo) {
    console.log(pony);
}

/*

 for (let pony of foo) {
 console.log(pony);
 }
 */


/*
 console.log([...foo])
 // <- ['p', 'o', 'n', 'y', 'f', 'o', 'o']
 console.log(Array.from(foo))
 // <- ['p', 'o', 'n', 'y', 'f', 'o', 'o']
 */