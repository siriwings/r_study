/**
 * Created by siri on 2016-12-28.
 */

//중요! ES6에서는 undefined만 처리한다!
function defaultValue(color="black", isNull="Nullable") {
    console.log("color=" + color + " , isNull=" + isNull );
}
//defaultValue(undefined, null);
defaultValue();




function previousDefaultValue(color, isNull) {
    color = color || "black";
    isNull = isNull || "Nullable";
    console.log("color=" + color + " , isNull=" + isNull );
}
previousDefaultValue(undefined, null);