let grid = document.querySelector('.grid-container');

function newGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.appendChild(newRow);
        for (let i = 0; i < cols; i++) {
            let newBox = document.createElement('a');
            newBox.classList.add('box');
            newRow.appendChild(newBox);
        }
    }
}

newGrid(40, 40)

grid.addEventListener('mouseover', function(e) {
    if (e.target.localName == 'a') {
        e.target.style.backgroundColor = 'black';
    }
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function() {
    let boxes = document.getElementsByTagName('a');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'antiquewhite';
    }
})

const newGridBtn = document.querySelector('#new-grid');
let rowBox = document.querySelector('.row');
let colBox = document.querySelector('.column');
newGridBtn.addEventListener('click', function() {
    grid.innerHTML = '';
    newGrid(rowBox.value, colBox.value);
})