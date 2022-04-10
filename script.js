function init(){
    makeGrid(10);
    callB();
}

function makeGrid(size){
    
    for(let i = 0; i < size; i++){

        const len = 500/size;
        const row = document.createElement('div');
        row.className = 'row';
        row.classList.add = 'row';
        row.style.height = len+'px';

        for(let j = 0; j < size; j++){
            const element = document.createElement('div');
            element.className = 'ele';
            element.classList.add = 'ele';
            element.style.width = len+'px';
            row.appendChild(element);
        }
        grid.appendChild(row);
    }
    allEles = Array.from(document.querySelectorAll('.ele'));
    callB();
}

function buildGrid(){

    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    const side = input.value;
    makeGrid(side);
}

function clearAll(){
    const siz = allEles.length;
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    makeGrid(Math.sqrt(siz));
}

function paintRainbow(e){
    let a = Math.floor(Math.random()*(250 - 0 + 1) + 0);
    let b = Math.floor(Math.random()*(250 - 0 + 1) + 0);
    let c = Math.floor(Math.random()*(250 - 0 + 1) + 0);
    e.target.style.backgroundColor = "rgb("+a+","+b+","+c+")";
}

function paintBlack(e){
    e.target.style.backgroundColor = 'black';
}

function callR(){
    for(let i = 0; i < allEles.length; i++){
        allEles[i].removeEventListener('mouseenter', paintBlack);
    }
    for(let i = 0; i < allEles.length; i++){
        allEles[i].addEventListener('mouseenter', paintRainbow);
    }
}

function callB(){
    for(let i = 0; i < allEles.length; i++){
        allEles[i].removeEventListener('mouseenter', paintRainbow);
    }
    for(let i = 0; i < allEles.length; i++){
        allEles[i].addEventListener('mouseenter', paintBlack);
    }
}

const grid = document.querySelector('.grid');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('#submitBtn');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraseBtn = document.querySelector('#eraseBtn');

submitBtn.addEventListener('click', buildGrid);
rainbowBtn.addEventListener('click', callR);
blackBtn.addEventListener('click', callB);
eraseBtn.addEventListener('click', clearAll);

init();
