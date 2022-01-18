const form = document.getElementById('firstname');

const displayFN = (event) => {
    
    event.preventDefault();
    const newFN = event.target.value;
    document.getElementById('display-firstname').innerHTML = newFN;
}
form.addEventListener('keyup', displayFN);