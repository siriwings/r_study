/**
 * Created by siri on 2016-12-29.
 */
let a = "a";
//let a = "aa";
function myfunction(){

    let a = "changed a";
    let b = "b";
    if(true){
        console.log(b); //b
        let c = "c";
    }
    //console.log(c); //error
}
myfunction();
console.log(a); //a
//console.log(b); //error
//console.log(c); //error
