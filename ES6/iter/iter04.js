/**
 * Created by siri on 2016-12-30.
 */
const iter = {
    [Symbol.iterator](){return this;},
    arr:[1,2,3,4],
    next(){
        return {
            done:this.arr.length===0,
            value: this.arr.shift()
        };
    }
};

//f 반복시 마다 처리할 함수.

const loop = (iter,f)=>{

    //Iterable이라면 Iterator를 얻음
    if(typeof iter[Symbol.iterator]=='function'){
        iter = iter[Symbol.iterator]();
    }

    //IteratorObject가 아니라면 건너뜀
    if(typeof iter.next != 'function') return;

    while (true){
        const v =iter.next();
        if(v.done) return; //종료처리
        f(v.value); //현재 값을 전달함.
    }
}


loop(iter,console.log);
