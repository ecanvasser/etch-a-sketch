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

grid.addEventListener('mouseover', function(e) {
    if (e.target.localName == 'a') {
        e.target.style.backgroundColor = 'black';
        console.log('good')
    }
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function() {
    let boxes = document.getElementsByTagName('a');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'antiquewhite';
    }
})