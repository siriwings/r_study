/**
 * Created by siri on 2016-12-29.
 */

//반복을 위한 준비
const foo = class{
    constructor(arg) {
        this.arg = arg;
    }

    [Symbol.iterator](){
        let items=this.arg;

        return {
            done:false,
            next(){
                if(items.length===0){
                    this.done =true;
                }else{
                    this.value=items.shift();
                }
                return this;
            }
        };
    }
};

/*미리 데이터가 준비되있지않고
next()함수가 호출될 때 데이터를 만든다.
얼마큼 만들꺼냐?
next()함수가 호출된 횟수만큼 만든다.
*/
for (let pony of new foo(['p', 'o', 'n', 'y', 'f', 'o', 'o'])){
    console.log(pony);
}


console.log([...new foo(['p', 'o', 'n', 'y', 'f', 'o', 'o'])]);
