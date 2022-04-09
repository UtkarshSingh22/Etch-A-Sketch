function makeGrid(size){

    for(let i = 0; i < size; i++){

        const row = document.createElement('div');
        row.className = 'row';
        row.classList.add = 'row';

        for(let j = 0; j < size; j++){
            const element = document.createElement('div');
            element.className = 'ele';
            element.classList.add = 'ele';
            row.appendChild(element);
        }
        grid.appendChild(row);
        //console.log(row);
    }
}

const grid = document.querySelector('.grid');

makeGrid(10);