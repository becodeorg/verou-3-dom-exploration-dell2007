var newTitle= document.getElementsByClassName("important");
var i;
for ( i = 0; i < newTitle.length; i++) {
    newTitle[i].setAttribute("title", "This is an important item");
}

var tags = document.querySelectorAll("img");
console.log(tags);
for (var i=0; i < tags.length; i++){
    console.log( tags[i]);
    if (tags[i].className != "important") {
        tags[i].style.display="none";
        }
}

/*var allImg = document.querySelectorAll("img")

for (var i of allImg){
    if (i.className != "important") {
    i.style.display="none";
    }
}*/

var parg = document.querySelectorAll("p");
console.log(parg);
for (var x=0; x <parg.length; x++){
    console.log(parg[x]);
    parg[x].style.color = pargRgb();
}

function pargRgb() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
