let grid = document.querySelector('.grid-container');

function newGrid() {
    for (let i = 0; i < 10; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.appendChild(newRow);
        for (let i = 0; i < 15; i++) {
            let newBox = document.createElement('div');
            newBox.classList.add('box');
            newRow.appendChild(newBox);
        }
    }
}

newGrid()