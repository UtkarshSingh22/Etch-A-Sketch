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
}

function buildGrid(){

    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    const side = input.value;
    if(side > 64){
        side = 64;
    }
    makeGrid(side);
}

const grid = document.querySelector('.grid');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', buildGrid);

init();