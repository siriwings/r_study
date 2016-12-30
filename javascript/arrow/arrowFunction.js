/**
 * Created by siri on 2016-12-28.
 */
var createGreeting = function (message, name) {
    return console.log(message+", "+name);
}

var arrowGreeting1 = (message, name)=>{
    return console.log(message+", "+name);
}

var arrowGreeting2 = (message, name)=> console.log(message+", "+name);

var arrowGreeting3 = () => console.log("Hello, React_Study!");

createGreeting("Hello","Jinsil");

arrowGreeting1("Hello","Hwang1");
arrowGreeting2("Hello","Hwang2");
arrowGreeting3();