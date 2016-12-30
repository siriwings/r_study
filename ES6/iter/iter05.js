/**
 * Created by siri on 2016-12-30.
 */
const iter = {
    [Symbol.iterator](){return this;},
    arr:[1,2,3,4],
    next(){
        return {
            done:this.arr.length===0,
            value: this.arr.pop()
        };
    }
};


/*
//Array destructuring (배열해체)
const [a,...b] = iter;
console.log(a,b);
*/

/*
//Spread (펼치기)
const a = [...iter];
console.log(a);
*/

/*
//Rest Parameter (나머지 인자)
const test=(...arg)=>console.log(arg);
test(...iter);
*/


//iterator,iterable(위 세개는 iterable만)
for(const v of iter){
    console.log(v);
}

