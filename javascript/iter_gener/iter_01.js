/**
 * Created by siri on 2016-12-30.
 */
//반복을 위한 준비
const iterable = {
    [Symbol.iterator]() {
        let items=['p', 'o', 'n', 'y', 'f', 'o', 'o'];
        const iterator={
            next() {
                if(items.length===0){
                    //this.done = true;
                    return {value:undefined, done:true};
                }else{
                    //this.value = items.shift();
                    return {value:items.shift(), done:false};
                }
                //return this;
            }
        };
        return iterator;
    }
};


//반복 행위
for (let pony of iterable) {
    console.log(pony);
}