document.title = "Modifying the DOM";
console.log(document.title)

document.body.style.backgroundColor = "#FF69Br";

function generateRandomColorRgb() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
document.body.style.backgroundColor = generateRandomColorRgb();

var children = document.body.children;
for (var x of children) {
    console.log (x);
}