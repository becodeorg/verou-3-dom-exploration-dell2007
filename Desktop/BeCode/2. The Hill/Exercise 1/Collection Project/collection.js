const games = [{
        name: 'Mario Bros',
        director: 'Shigeru Miyamoto & Gunpei Yokoi',
        releaseYear: 1983,
        picture: '/Info/1. Mario Bros.jpg',
        platform: ['Arcade'],
        trailer: 'https://www.youtube.com/watch?v=ly8DofqCuOs',
        img: '/Info/ytube.svg',
    },
    {
        name: 'Super Mario Bros.',
        director: 'Shigeru Miyamoto & Takashi Tezuka',
        releaseYear: 1986,
        picture: '/Info/2. S M Bros.jpg',
        platform: ['Nintendo NES'],
        trailer: 'https://www.youtube.com/watch?v=ETFehd5o9K4 ',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario World',
        director: 'Shigeru Miyamoto & Takashi Tezuka',
        releaseYear: 1990,
        picture: '/Info/3. S M World.jpg',
        platform: ['Super NES'],
        trailer: 'https://www.youtube.com/watch?v=RJ1w-venSAE',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario Kart',
        director: 'Tadashi Sugiyama Hideki Konno',
        releaseYear: 1992,
        picture: '/Info/4. S M Kart.jpg',
        platform: ['Super NES'],
        trailer: 'https://www.youtube.com/watch?v=d6WLufD-VCg',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario 64',
        director: 'Shigeru Miyamoto',
        releaseYear: 1996,
        picture: '/Info/5. S M 64.jpg',
        platform: ['Nintendo 64'],
        trailer: 'https://www.youtube.com/watch?v=8Fk5sRwbEWI',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Luigi Mansion',
        director: 'Hideki Konno',
        releaseYear: 1994,
        picture: '/Info/6. Luigi Mansion.png',
        platform: ['GameCube'],
        trailer: 'https://www.youtube.com/watch?v=Qp4WwE_6nUc',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario Sunshine',
        director: 'Yoshiaki Koizumi & Kenta Usui',
        releaseYear: 2002,
        picture: '/Info/7. S M Sunshine.jpg',
        platform: ['GameCube'],
        trailer: 'https://www.youtube.com/watch?v=arvnhNPUrl0',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario Galaxy',
        director: 'Yoshiaki Koizumi',
        releaseYear: 2007,
        picture: '/Info/8. S M Galaxy.jpg',
        platform: ['Nintendo Wii'],
        trailer: 'https://www.youtube.com/watch?v=rmN8DHZYNCg',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario Odyssey',
        director: 'Kenta Motokura',
        releaseYear: 2017,
        picture: '/Info/9. S M Odyssey.jpg',
        platform: ['Nintendo Switch'],
        trailer: 'https://www.youtube.com/watch?v=5kcdRBHM7kM',
        img: '/Info/ytube.svg'
    },
    {
        name: 'Super Mario 3D World + Bowser Fury ',
        director: 'Koichi Hayashida & Kenta Motokura',
        releaseYear: 2021,
        picture: '/Info/10. Mario 3D.jpg',
        platform: ['Nintendo Switch'],
        trailer: 'https://www.youtube.com/watch?v=Yboi02C_j74',
        img: '/Info/ytube.svg'
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

    const nPic = document.createElement("img");
    nPic.src = game.picture;
    nPic.textContent = game.picture;
    nPic.className = "pic";
    newDiv.appendChild(nPic);

    const otherDiv = document.createElement("div");
    newDiv.appendChild(otherDiv);
    otherDiv.className = "text";

    const nTitle = document.createElement("h2"); //New tittle created
    nTitle.textContent = game.name;
    otherDiv.appendChild(nTitle);

    const platform = document.createElement("p");
    platform.textContent = game.platform;
    otherDiv.appendChild(platform);

    const year = document.createElement("p");
    year.textContent = game.releaseYear;
    platform.appendChild(year);

    const nDirector = document.createElement("p");
    nDirector.textContent = game.director;
    otherDiv.appendChild(nDirector);

    const trailer = document.createElement("a");
    trailer.href = game.trailer;
    
    otherDiv.appendChild(trailer);

    const utube = document.createElement("img");
    utube.src= game.img;
    trailer.appendChild(utube);

    gridCont.appendChild(newDiv);
}