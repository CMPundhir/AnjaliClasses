function submit() {
    var name = document.getElementById('exampleInputName').value;
    alert(name)
}
function reset() {
    alert("Resetting values...")
}


function onInputChange(n, deno, resId) {
    document.getElementById(resId).innerHTML = n * deno;
    onSumChange();
}

function onSumChange() {
    let p2000 = parseInt(document.getElementById('p2000').innerHTML)
    p2000 = isNaN(p2000) ? 0 : p2000
    let p500 = parseInt(document.getElementById('p500').innerHTML)
    p2000 = isNaN(p500) ? 0 : p500
    let p200 = parseInt(document.getElementById('p200').innerHTML)
    p2000 = isNaN(p200) ? 0 : p200
    let p100 = parseInt(document.getElementById('p100').innerHTML)
    p2000 = isNaN(p100) ? 0 : p100
    let p50 = parseInt(document.getElementById('p50').innerHTML)
    p2000 = isNaN(p50) ? 0 : p50
    let p20 = parseInt(document.getElementById('p20').innerHTML)
    p2000 = isNaN(p20) ? 0 : p20
    let p10 = parseInt(document.getElementById('p10').innerHTML)
    p2000 = isNaN(p10) ? 0 : p10


    let sum = p2000 + p500 + p200 + p100 + p50 + p20 + p10
    document.getElementById("pTotal").innerHTML = sum

}

function calculateSum() {
    let n2000 = parseInt(document.getElementById('n2000').value)
    n2000 = isNaN(n2000) ? 0 : n2000
    onInputChange(n2000, 2000, "p2000")

    let n500 = parseInt(document.getElementById('n500').value)
    n500 = isNaN(n500) ? 0 : n500
    onInputChange(n500, 500, "p500")

    let n200 = parseInt(document.getElementById('n200').value)
    n200 = isNaN(n200) ? 0 : n200
    onInputChange(n200, 200, "p200")

    let n100 = parseInt(document.getElementById('n100').value)
    n100 = isNaN(n100) ? 0 : n100
    onInputChange(n100, 100, "p100")

    let n50 = parseInt(document.getElementById('n50').value)
    n50 = isNaN(n50) ? 0 : n50
    onInputChange(n50, 50, "p50")

    let n20 = parseInt(document.getElementById('n20').value)
    n20 = isNaN(n20) ? 0 : n20
    onInputChange(n20, 20, "p20")

    let n10 = parseInt(document.getElementById('n10').value)
    n10 = isNaN(n10) ? 0 : n10
    onInputChange(n10, 10, "p10")
    // onInputChange(parseInt(document.getElementById('n500').value), 500, "p500")
    // onInputChange(parseInt(document.getElementById('n200').value), 200, "p200")
    // onInputChange(parseInt(document.getElementById('n100').value), 100, "p100")
    // onInputChange(parseInt(document.getElementById('n50').value), 50, "p50")
    // onInputChange(parseInt(document.getElementById('n20').value), 20, "p20")
    // onInputChange(parseInt(document.getElementById('n10').value), 10, "p10")
}