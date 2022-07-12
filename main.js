let grid = document.querySelector('.grid-container');

function newGrid() {
    for (let i = 0; i < 80; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.appendChild(newRow);
        for (let i = 0; i < 80; i++) {
            let newBox = document.createElement('a');
            newBox.classList.add('box');
            newRow.appendChild(newBox);
        }
    }
}

newGrid()

let gridBox = document.querySelector('.box');
document.addEventListener('mouseover', function(e) {
    if (e.target.localName == 'a') {
        e.target.style.backgroundColor = 'black';
    }
})