//Importing from other js file
import {
    games
} from './collection.js';

const existDiv = document.querySelector("div");
existDiv.className = "container"; //Container to manage the whole body
const gridCont = document.createElement("div");
gridCont.className = "grid-container";
existDiv.appendChild(gridCont);

for (const game of games) {
    const newDiv = document.createElement("div"); //New div created
    newDiv.className = "card"; //Class for styling

    const nPic = document.createElement("img");
    nPic.src = game.picture; 
    nPic.textContent = game.picture;
    nPic.className = "pic";
    newDiv.appendChild(nPic);

    const otherDiv = document.createElement("div");
    newDiv.appendChild(otherDiv);
    otherDiv.className = "text";

    const nTitle = document.createElement("h2"); 
    nTitle.textContent = game.name;
    otherDiv.appendChild(nTitle);

    const year = document.createElement("p");
    year.textContent = game.releaseYear;
    otherDiv.appendChild(year);

    const platform = document.createElement("p");
    platform.textContent = game.platform;
    otherDiv.appendChild(platform);

    const nDirector = document.createElement("p");
    nDirector.textContent = game.director;
    otherDiv.appendChild(nDirector);

    const anotherDiv = document.createElement("div");
    newDiv.appendChild(anotherDiv);
    anotherDiv.className = "logo";

    const line = document.createElement("hr");
    anotherDiv.appendChild(line);

    const trailer = document.createElement("a");
    trailer.href = game.trailer;
    trailer.target = "_blank";
    anotherDiv.appendChild(trailer);

    const utube = document.createElement("img");
    utube.src = game.img;
    trailer.appendChild(utube);

    gridCont.appendChild(newDiv);
}