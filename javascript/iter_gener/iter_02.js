/**
 * Created by siri on 2016-12-30.
 */
//반복을 위한 준비
function iterateOver(...args) {
    const iterable = {
        [Symbol.iterator]() {
            //let items=['p', 'o', 'n', 'y', 'f', 'o', 'o'];
            const iterator={
                next() {
                    if(args.length===0){
                        //this.done = true;
                        return {value:undefined, done:true};
                    }else{
                        //this.value = items.shift();
                        return {value:args.shift(), done:false};
                    }
                    //return this;
                }
            };
            return iterator;
        }
    }
    return iterable;
}



//반복 행위
for (let pony of iterateOver('p', 'o', 'n', 'y', 'f', 'o', 'o')) {
    console.log(pony);
}