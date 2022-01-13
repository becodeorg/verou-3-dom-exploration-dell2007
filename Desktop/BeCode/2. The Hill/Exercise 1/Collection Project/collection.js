const games = [{
        name: 'Mario Bros',
        director: 'Shigeru Miyamoto & Gunpei Yokoi',
        releaseYear: 1983,
        picture: '/Info/1. Mario Bros.jpg',
        platform: ['Arcade'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Bros.',
        director: 'Shigeru Miyamoto & Takashi Tezuka',
        releaseYear: 1986,
        picture: '/Info/2. S M Bros.jpg',
        platform: ['Nintendo NES'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario World',
        director: 'Shigeru Miyamoto and Takashi Tezuka',
        releaseYear: 1990,
        picture: '/Info/3. S M World.jpg',
        platform: ['/Info/3. Super Mario World.png'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Kart',
        director: 'Tadashi Sugiyama Hideki Konno',
        releaseYear: 1992,
        picture: '/Info/4. S M Kart.jpg',
        platform: ['Super NES'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario 64',
        director: 'Shigeru Miyamoto',
        releaseYear: 1996,
        picture: '/Info/5. S M 64.jpg',
        platform: ['Nintendo 64'],
        trailer: ['"#"']
    },
    {
        name: 'Luigi Mansion',
        director: 'Hideki Konno',
        releaseYear: 1994,
        picture: '/Info/6. Luigi Mansion.png',
        platform: ['GameCube'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Sunshine',
        director: 'Yoshiaki Koizumi & Kenta Usui',
        releaseYear: 2002,
        picture: '/Info/7. S M Sunshine.jpg',
        platform: ['GameCube'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Galaxy',
        director: 'Yoshiaki Koizumi',
        releaseYear: 2007,
        picture: '/Info/8. S M Galaxy.jpg',
        platform: ['Nintendo Wii'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Odyssey',
        director: 'Kenta Motokura',
        releaseYear: 2017,
        picture: '/Info/9. S M Odyssey.jpg',
        platform: ['Nintendo Switch'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario 3D World + Bowser Fury ',
        director: 'Koichi Hayashida & Kenta Motokura',
        releaseYear: 2021,
        picture: '/Info/10. Mario 3D.jpg',
        platform: ['Nintendo Switch'],
        trailer: ['"#"']
    }
]

const existDiv = document.querySelector("div");
existDiv.className = "container"; //Container to manage the whole body
const gridCont = document.createElement("div");
gridCont.className = "grid-container";
existDiv.appendChild(gridCont);

for (const game of games) {
    const newDiv = document.createElement("div"); //New div created
    newDiv.className = "card"; //Class for styling

    const nPic = document.createElement("img")
    nPic.src = game.picture;
    nPic.textContent = game.picture;
    nPic.className = "pic";
    newDiv.appendChild(nPic);
    
    const otherDiv = document.createElement("div");
    newDiv.appendChild(otherDiv);

    const nTitle = document.createElement("h2") //New tittle created
    nTitle.textContent = game.name;
    otherDiv.appendChild(nTitle);

    const platform = document.createElement("p")
    platform.textContent = game.platform;
    otherDiv.appendChild(platform);

    const year = document.createElement("p")
    year.textContent = game.releaseYear;
    platform.appendChild(year);

    const nDirector = document.createElement("p")
    nDirector.textContent = game.director;
    otherDiv.appendChild(nDirector);

    const trailer = document.createElement("a")
    trailer.textContent = game.trailer;
    otherDiv.appendChild(trailer);

    gridCont.appendChild(newDiv);
}