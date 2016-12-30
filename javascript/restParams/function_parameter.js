
function dynamicArguments(arg1, ...rest) {
    console.log(arg1);
    console.log(rest);
}

dynamicArguments(1,2,3,4);


var spread = ["P", "R", "E", "A"];
dynamicArguments("S", ...spread, "D");

function previousDynamicArguments(arg1) {
    var rest = Array.prototype.slice.call(arguments, 1);
    console.log(arg1);
    console.log(rest);
}

previousDynamicArguments(1,2,3,4);
previousDynamicArguments.apply(this, ["S"].concat(spread).concat(["D"]));
