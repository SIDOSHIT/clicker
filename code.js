let pId = document.getElementById('p');
let btnId = document.getElementById('btn');
let number = 0;

btnId.addEventListener('click', function() {
    number++;
    pId.textContent = +number;

});