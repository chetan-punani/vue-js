
const btnEl = document.querySelector('button');
const ipEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addText(){
    const val = ipEl.value;
    const liEl = document.createElement('li');
    liEl.textContent = val;
    listEl.appendChild(liEl);
    ipEl.value('');
}

btnEl.addEventListener('click',addText);

