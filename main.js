function changeCompany() {
    document.getElementById("companyNameDisplay").innerHTML = document.getElementById("companyName").value;
}
function changeSlogan() {
    document.getElementById("companySloganDisplay").innerHTML = document.getElementById("companySlogan").value;
}
function changeBG() {
    var bgcolor = document.getElementById("BackgroundColor").value;
    document.getElementById("card").style.backgroundColor = bgcolor;
}
function changeColor() {
    var color = document.getElementById("FC").value;
    document.getElementById("card").style.color = color;
}
function leftAlign() {
    document.getElementById("card").style.textAlign = "left";
}
function centerAlign() {
    document.getElementById("card").style.textAlign = "center";
}
function rightAlign() {
    document.getElementById("card").style.textAlign = "right";
}
function changeName() {
    document.getElementById("yourNameDisplay").innerHTML = document.getElementById("yourName").value;
}
function changeJob() {
    document.getElementById("jobTitleDisplay").innerHTML = document.getElementById("jobTitle").value;
}
function changeEmail() {
    document.getElementById("emailAdDisplay").innerHTML = "Email: " + document.getElementById("emailAd").value;
}
function changeTel() {
    document.getElementById("NumberDisplay").innerHTML = "Tel: " + document.getElementById("Number").value;
}
function changeAd() {
    document.getElementById("addressDisplay").innerHTML = "Address: " + document.getElementById("address").value;
}
document.getElementById("businessForm").onsubmit = function() {
    document.getElementById("businessForm").style.display = "none";
    document.getElementsByTagName("h1")[0].style.display = "none";
    alert("Your Business Card");
    return false;
};