const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());

    //Create a new div
    const existDiv = document.querySelector('.displayedsquare-wrapper');
    const newDiv = document.createElement('div');
    newDiv.className = 'displayedsquare';
    existDiv.appendChild(newDiv);

    //Duplicate the colors from the existing div boxes
    const boxColor = e.target.classList[1];
    newDiv.classList.add(boxColor); //When adding a new class with .classList it will create a new one without deleting existing ones 

    //Create a log with when the action is done
    const newList = document.createElement('li');
    const existList = document.querySelector('ul');
    existList.appendChild(newList);
    newList.innerText = '[' + getElapsedTime() + ']' + ' Created a new ' + boxColor + ' square';

    //Delete the duplicated boxes pressing s
        document.addEventListener('keydown', function (event) {
        if (event.key === 's') {
            existDiv.innerHTML = " ";
        }
    })

    //Creates alert pops-up
    // const alertBox = document.getElementsByClassName('.displayedsquare');
    // document.addEventListener('click', event => {
    //     existDiv.textContent = alert(boxColor);
    // })
}

const actionsquares = document.querySelectorAll('.actionsquare');
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare);
}

// Changing background color
function backColor() {
    document.body.style.backgroundColor = randomColor();
}

function randomColor() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

const background = document.getElementsByTagName('body');
const sameList = document.querySelector('ul');
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        backColor();
        //Create a log when background change color
        const otherList = document.createElement('li');
        sameList.appendChild(otherList);
        otherList.innerText = '[' + getElapsedTime() + ']' + ' Changed background color ';
    }
    //Delete the log pressing i 
    if (event.key === 'i') {
        sameList.innerHTML = " ";
    }
})