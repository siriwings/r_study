/**
 * Created by siri on 2016-12-28.
 */
var d = new Promise((resolve, reject) => {
    //throw new Error('error thrown!');
    setTimeout(() => {
        if (true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 2000);
});

d.then((data)=>{
    console.log('success : ', data)
    //return 'foo bar';
    }).
    then((data)=>console.log('success 2 : ',data)).
    catch((error)=>console.log('error : ', error));

/*
d.then((data)=>console.log('success : ', data),(error)=>{
    console.error('new error msg: ', error);
});
*/
/*
d.then((data)=>console.log('success : ', data));

d.catch((error)=>console.log('error : ', error));

    */