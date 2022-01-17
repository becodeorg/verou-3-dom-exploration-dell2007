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
    actionsquare.addEventListener('click', clickOnSquare)
}