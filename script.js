function makeGrid(size = 10){
    
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
            element.style.width = len+'px' ;
            row.appendChild(element);
        }
        grid.appendChild(row);
    }
}

const grid = document.querySelector('.grid');

makeGrid();