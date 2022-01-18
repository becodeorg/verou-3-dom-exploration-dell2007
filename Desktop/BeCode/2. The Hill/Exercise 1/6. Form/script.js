//Showing the content inside the input field
const form = document.getElementById('firstname');

const displayFN = (event) => {
    event.preventDefault();

    const newFN = event.target.value;
    document.getElementById('display-firstname').innerHTML = newFN;
}
form.addEventListener('keyup', displayFN);

//Visible message according to age
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

//Create visual hint for password error
const password = document.getElementById('pwd');
const newPwrd = (event) => {
    event.preventDefault();

    const checkPwrd = event.target.value;
    if (checkPwrd.length < 6) {
        password.style.backgroundColor ='red';
    } else {
        password.style.backgroundColor ='green';
    }
}
password.addEventListener('keyup', newPwrd);

const confPwrd = document.getElementById('pwd-confirm');
const confirmation = (event) => {
    event.preventDefault();

    const matchPwrd = event.target.value;
    
    if (matchPwrd === password.value) {
        confPwrd.style.backgroundColor ='green';
    } else {
        confPwrd.style.backgroundColor ='red';
    }
}
confPwrd.addEventListener('keyup', confirmation);

//