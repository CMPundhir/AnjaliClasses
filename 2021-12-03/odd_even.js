const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Enter a number: "))
console.log(num)
console.log(typeof(num))

function isEven(n) {
	if (n%2==0) {
		return true;
	}else{
		return false;
	}
}

console.log(isEven(num) ? "Even" : "Odd")