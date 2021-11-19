


function formula(temperatura, speed) {
    return 35.74 + 0.6215 * temperatura - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperatura * Math.pow(speed, 0.16);
}
function addnumber() {
    let addtemperature = parseFloat(document.querySelector("#temp").value);
    let addspeed = parseFloat(document.querySelector("#speed").value);
    let result = formula(addtemperature, addspeed);

    document.querySelector("#sum").value = result;
}
document.querySelector("#addNumbers").addEventListener("click", addnumber)