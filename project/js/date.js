let d = new Date();

let year = d.getFullYear();
let justyear = year






document.getElementById("copyrightyear").textContent = justyear;
let lasmodif = new Date(document.lastModified);
document.getElementById("full-date").textContent = lasmodif