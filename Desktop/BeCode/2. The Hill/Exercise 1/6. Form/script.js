const form = document.getElementById('firstname');

const displayFN = (event) => {
    event.preventDefault();

    const newFN = event.target.value;
    document.getElementById('display-firstname').innerHTML = newFN;
}
form.addEventListener('keyup', displayFN);

const form2 = document.getElementById('age');
const hardTrue = document.getElementById('a-hard-truth');

const displayAge = (event) => {
    event.preventDefault();

    const newAge = event.target.value;
    if (newAge < 18) {
        displayAge.innerHTML = "none";
    } else {
        hardTrue.style.visibility = 'visible';
        displayAge.innerHTML = hardTrue;
    }
}
form2.addEventListener('keyup', displayAge);