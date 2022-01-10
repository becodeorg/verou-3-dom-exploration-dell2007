
var newTitle= document.getElementsByClassName("important");
var i;
for ( i = 0; i < newTitle.length; i++) {
    newTitle[i].setAttribute("title", "This is an important item");
}