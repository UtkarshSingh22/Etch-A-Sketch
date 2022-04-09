function init(){
    makeGrid(10);
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
    const allEles = Array.from(document.querySelectorAll('.ele'));
    for(let i = 0; i < allEles.length; i++){
        allEles[i].addEventListener('mouseenter', paintBlack);
    }
}

function buildGrid(){

    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    const side = input.value;
    makeGrid(side);
}

function paint(e){
    e.target.style.backgroundColor = 'pink';
}

function paintBlack(e){
    e.target.style.backgroundColor = 'black';
    paint();
}

const grid = document.querySelector('.grid');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('#submitBtn');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');

submitBtn.addEventListener('click', buildGrid);
blackBtn.addEventListener('click', paintBlack);
rainbowBtn.addEventListener('click', paint);



init();

