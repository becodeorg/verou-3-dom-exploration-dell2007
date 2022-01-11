const promo = ["Ahmad", "Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Jordy", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid",
    "Koen", "Kevin", "Benjamin", "Dery", "Michelle", "Colin", "Feruz", "Pieter", "Ellen", "Sara"];

// Add a random color 
function generateRandomColorRgb() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Add a new element
function addElement(name) {
    const newSection = document.createElement("section"); //Create a section
    newSection.style.backgroundColor = generateRandomColorRgb();
    const article = document.querySelector("article"); //Select the article
    article.appendChild(newSection); //Append the new section
    const newPar = document.createElement("p");
    newSection.appendChild(newPar);
    const newContent = document.createTextNode(name);
    newPar.appendChild(newContent);
}


for (let i = 0; i < promo.length; i++) {
    const name = promo[i];
    addElement(name);
}

// document.body.onload = addElement;