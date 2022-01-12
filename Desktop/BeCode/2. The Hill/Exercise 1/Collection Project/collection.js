const games = [{
        name: 'Mario Bros',
        director: 'Shigeru Miyamoto & Gunpei Yokoi',
        releaseYear: 1983,
        picture: 'link/to/a/picture',
        platform: ['Arcade'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Bros.',
        director: 'Shigeru Miyamoto & Takashi Tezuka',
        releaseYear: 1986,
        picture: 'link/to/a/picture',
        platform: ['Nintendo NES'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario World',
        director: 'Shigeru Miyamoto and Takashi Tezuka',
        releaseYear: 1990,
        picture: 'link/to/a/picture',
        platform: ['Super NES'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Kart',
        director: 'Shigeru Miyamoto',
        releaseYear: 1992,
        picture: 'link/to/a/picture',
        platform: ['Super NES'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario 64',
        director: 'Shigeru Miyamoto',
        releaseYear: 1996,
        picture: 'link/to/a/picture',
        platform: ['Nintendo 64'],
        trailer: ['"#"']
    },
    {
        name: 'Luigi Mansion',
        director: 'Hideki Konno',
        releaseYear: 1994,
        picture: 'link/to/a/picture',
        platform: ['GameCube'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Sunshine',
        director: 'Yoshiaki Koizumi & Kenta Usui',
        releaseYear: 2002,
        picture: 'link/to/a/picture',
        platform: ['GameCube'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Galaxy',
        director: 'Yoshiaki Koizumi',
        releaseYear: 2007,
        picture: 'link/to/a/picture',
        platform: ['Nintendo Wii'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario Odyssey',
        director: 'Kenta Motokura',
        releaseYear: 2017,
        picture: 'link/to/a/picture',
        platform: ['Nintendo Switch'],
        trailer: ['"#"']
    },
    {
        name: 'Super Mario 3D World + Bowser Fury ',
        director: 'Koichi Hayashida & Kenta Motokura',
        releaseYear: 2021,
        picture: 'link/to/a/picture',
        platform: ['Nintendo Switch'],
        trailer: ['"#"']
    }
]

const existDiv = document.querySelector("div");
existDiv.className = "container"; //Container to manager the whole body

for (const game of games) {
    const newDiv = document.createElement("div"); //New div created
    newDiv.className = "card"; //Class for styling

    const nPic = document.createElement("img")
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

    existDiv.appendChild(newDiv);
}