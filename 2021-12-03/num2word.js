const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Enter a number: "))

const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
				"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen", "Twenty"]
const tens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"]
const others = ["Hundred", "Thousands", "Lakhs", "Crores"]


function oneTo99(n) {
	if(n<20){
		return ones[n]
	}else{
		let t = parseInt(n/10)
		let o = n%10
		console.log(`t = ${t} , o = ${o}`)

		return tens[t]+(o==0? "" : " "+ones[o])
	}
}

function oneTo999(n) {
	if(n<100){
		return oneTo99(n)
	}else if(n<1000){
		let h = parseInt(n/100)
		let d = n%100
		console.log(`h = ${h} , d = ${d}`)
		return ones[h]+" Hundred "+oneTo99(d)
	}
}

function oneTo99999(n) {
	if(n<1000){
		return oneTo999(n)
	}else{
		let th = parseInt(n/1000)
		let h = n%1000
		console.log(`th = ${th} , h = ${h}`)
		return oneTo99(th)+" Thousand "+oneTo999(h)
	}
}

function oneTo9999999(n) {
	if(n<100000){
		return oneTo99999(n)
	}else{
		let th = parseInt(n/100000)
		let h = n%100000
		console.log(`th = ${th} , h = ${h}`)
		return oneTo99(th)+" Lakh "+oneTo99999(h)
	}
}

function oneTo999999999(n) {
	if(n<10000000){
		return oneTo9999999(n)
	}else{
		let th = parseInt(n/10000000)
		let h = n%10000000
		console.log(`th = ${th} , h = ${h}`)
		return oneTo99(th)+" Crore "+oneTo9999999(h)
	}
}

console.log(oneTo999999999(num))
