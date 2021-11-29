let x = "Anjali"
console.log("Global : "+x)

// I am a block
{
	let x = "Sachin"
	console.log("Inside Block : "+x)
}

console.log("Global 10 : "+x)

const hobbies = ["Meditation", "Yoga", "Paise me Khelna"]
console.log(hobbies)
console.log(hobbies[0])

// hobbies = ["Smoking", "Driking", "Rash driving"]
// console.log(hobbies)

// adding a value to array
hobbies.unshift("Singing");
console.log(hobbies)

hobbies[2] = "Yoga se hoga"
console.log(hobbies)


// object creation
dress = {
	name : "Jacket",
	price : "Rs. 299",
	quality : "Best Quality",
	type : {
		use : "Party",
		material : "Jeans",
	},
	colors : ["white", "light blue", "brown"]
}

console.log(dress)
console.log(dress.colors[0])
console.log(typeof(dress.colors))



