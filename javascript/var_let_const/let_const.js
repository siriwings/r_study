/**
 * Created by siri on 2016-12-24.
 */
let myObject = {
        name: "unikys",
        say() {
            console.log("My name is " + this.name);
         }
 };


myObject.say();
const constString = "This is a constant";

//constString = "This will raise an error"; // Error!
