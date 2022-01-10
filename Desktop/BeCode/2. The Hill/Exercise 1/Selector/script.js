var newTitle= document.getElementsByClassName("important");
var i;
for ( i = 0; i < newTitle.length; i++) {
    newTitle[i].setAttribute("title", "This is an important item");
}

var tags = document.getElementsByTagName("img");
for (var i=0, max=tags.length; i < max; i++);{
console.log(tags, "i");
}