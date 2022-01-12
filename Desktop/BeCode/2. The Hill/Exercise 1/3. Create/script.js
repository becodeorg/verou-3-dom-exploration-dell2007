//Array with promo names
const promo = ["Ahmad", "Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Jordy", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid",
    "Koen", "Kevin", "Benjamin", "Dery", "Michelle", "Colin", "Feruz", "Pieter", "Ellen", "Sara"];

//Shuffle array
const shuffledName = promo.sort((a, b) => 0.5 - Math.random());

// Add a random color 
function generateRandomColorRgb() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Change text color depending on the background
function getTextColor(rgba) {
    rgba = rgba.match(/\d+/g);
    if ((rgba[0] * 0.299) + (rgba[1] * 0.587) + (rgba[2] * 0.114) > 127.5) {
        return 'black';
    } else {
        return 'white';
    }
}

//Loop to select all the names individually
for (let i = 0; i < promo.length; i++) {
    const name = promo[i];
        const newSection = document.createElement("section"); //Create a section
        newSection.style.backgroundColor = generateRandomColorRgb(); //Assign random bgC to the section
        newSection.style.color = getTextColor (newSection.style.backgroundColor); //Assign random color to the text declaring between parenthesis  the bgC
        const article = document.querySelector("article"); //Select the article
        article.appendChild(newSection); //Append the section to the article
        const newPar = document.createElement("p"); //Create a P
        newSection.appendChild(newPar); //Append the P to the section
        const newContent = document.createTextNode(name); //Add text from the array which was organize in the loop
        newPar.appendChild(newContent); //Append the text to the P
    }