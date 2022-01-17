const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    const existDiv = document.querySelector('.displayedsquare-wrapper');
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    const newDiv = document.createElement('div');
    newDiv.className = 'displayedsquare' + ' ' + e.target.classList[1];
    existDiv.appendChild(newDiv);

    const newList = document.createElement('li');
    const existList = document.querySelector('ul');
    existList.appendChild(newList);
    newList.innerText = '[' + getElapsedTime() + ']' + ' Created a new ' + e.target.classList[1] + ' square';
}

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare);
}

// Changing background color
const background = document.getElementsByTagName('body')
document.addEventListener('keypress', (Event) => {
    backColor();
    console.log(Event.key);
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