const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())

    //Create a new div
    const existDiv = document.querySelector('.displayedsquare-wrapper');
    const newDiv = document.createElement('div');
    newDiv.className = 'displayedsquare';
    existDiv.appendChild(newDiv);

    //Duplicate the colors from the existing div boxes
    const boxColor = e.target.classList[1];
    newDiv.classList.add(boxColor);

    //Create a log with the action done
    const newList = document.createElement('li');
    const existList = document.querySelector('ul');
    existList.appendChild(newList);
    newList.innerText = '[' + getElapsedTime() + ']' + ' Created a new ' + boxColor + ' square';
}

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare);
}

// Changing background color
const background = document.getElementsByTagName('body')
document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
    backColor()}
});

function backColor() {
    document.body.style.backgroundColor = randomColor();
}

function randomColor() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}