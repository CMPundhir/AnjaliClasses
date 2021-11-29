// datatype
/*
1. Number
2. String
3. Object
4. Array
*/

// Number
console.log(1)
console.log(199)
console.log(3.4)
console.log(-828)
console.log(typeof(828))

let magicNo = 2.021
console.log(typeof(magicNo))

// String
console.log("Chander Mohan Pundhir")
var god = "Gyanendra Lamba"
console.log(typeof(god))

// Object
var car = {
	"brand" : "Maruti Suzuki",
	"model" : "Swift",
	"year" : 2012,
	"varient" : "deisel",
	"sound_system" : {
		"brand" : "Sony",
		"nos" : 5,
		"is_boofer" : true,
		"power" : "20 watt"
	}
}

console.log(car)
console.log(typeof(car))
console.log("Model => "+car.model)

console.log(car.sound_system)
console.log(typeof(car.sound_system))


