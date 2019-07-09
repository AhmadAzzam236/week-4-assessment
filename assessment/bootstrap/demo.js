demo example
console.log("hiya friend!");



for (var i = 0; i < 10; i++) { console.log(i); }
document.getElementsByTagName("h1")[0].style.color = "#ff0000";

document.body.addEventListener('click', function () {
    var myParent = document.getElementById("Banner"); 
    var myImage = document.createElement("img");
    myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});
var totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
var tip = 8; // uses lowercase if the variable name is one word



// This doesn't work
let message = 'You can't be serious!';
console.log(message);
let message = 'He asked, "Where are we?"';
console.log(message);


"Yes" == "yes"
//return false 

'Y' != 'y'
//return true