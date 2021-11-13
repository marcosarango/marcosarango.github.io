


let d = new Date();

let year = d.getFullYear();
let justyear = year






document.getElementById("copyrightyear").textContent = justyear;
let lasmodif = new Date(document.lastModified);
document.getElementById("full-date").textContent = lasmodif


////////////////////////////////////////////////////////////
window.onload = updateBox;

function updateBox(){
    let date = new Date().getFullYear();
    let d = new Date();
    let monthDay = d.getDate();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('full-date').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()]+ ' '+ date;
}