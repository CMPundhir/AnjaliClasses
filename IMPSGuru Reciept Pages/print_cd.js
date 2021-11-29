function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function num2words(num) {

}

const params = getUrlVars()

var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', hour12: false, minute: 'numeric' };

document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString("en-US", options)
document.getElementById('name').innerHTML = params['name']
document.getElementById('bname').innerHTML = params['bname']

document.getElementById('Mnumber').innerHTML = getRndInteger(999999999, 9999999999)

document.getElementById('txnid').innerHTML = getRndInteger(10000, 100000)

//for cd print form
document.getElementById('t2000').innerHTML = params['n2000']
let p2000 = parseInt(params['n2000'])
p2000 = isNaN(p2000) ? 0 : p2000
document.getElementById('r2000').innerHTML = "\u20b9 " + p2000 * 2000

document.getElementById('t500').innerHTML = params['n500']
let p500 = parseInt(params['n500'])
p500 = isNaN(p500) ? 0 : p500
document.getElementById('r500').innerHTML = "\u20b9 " + p500 * 500

document.getElementById('t200').innerHTML = params['n200']
let p200 = parseInt(params['n200'])
p200 = isNaN(p200) ? 0 : p200
document.getElementById('r200').innerHTML = "\u20b9 " + p200 * 200

document.getElementById('t100').innerHTML = params['n100']
let p100 = parseInt(params['n100'])
p100 = isNaN(p100) ? 0 : p100
document.getElementById('r100').innerHTML = "\u20b9 " + p100 * 100

document.getElementById('t50').innerHTML = params['n50']
let p50 = parseInt(params['n50'])
p50 = isNaN(p50) ? 0 : p50
document.getElementById('r50').innerHTML = "\u20b9 " + p50 * 50

document.getElementById('t20').innerHTML = params['n20']
let p20 = parseInt(params['n20'])
p20 = isNaN(p20) ? 0 : p20
document.getElementById('r20').innerHTML = "\u20b9 " + p20 * 20

document.getElementById('t10').innerHTML = params['n10']
let p10 = parseInt(params['n10'])
p10 = isNaN(p10) ? 0 : p10
document.getElementById('r10').innerHTML = "\u20b9 " + p10 * 10

let sum = p2000 * 2000 + p500 * 500 + p200 * 200 + p100 * 100 + p50 * 50 + p20 * 20 + p10 * 10
document.getElementById("pTotal").innerHTML = "\u20b9 " + sum