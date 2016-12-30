/**
 * Created by siri on 2016-12-29.
 */
var vehicles = {
    fourWheeles: {
        cars: [
            "SUV",
            "Sedan"
        ],
        trucks: [
            "Pullover",
            "Wagen"
        ]
    },
    twoWheeles: [
        "bicycle",
        "motorcycle"
    ]
};

console.log(vehicles.fourWheeles);


//ES6
var {fourWheeles, twoWheeles, fourWheeles: {cars, trucks}} = vehicles;

console.log(fourWheeles);
console.log(twoWheeles);
console.log(cars);
console.log(trucks);