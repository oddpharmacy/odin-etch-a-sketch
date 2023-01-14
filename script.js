const container = document.querySelector('.container');

function createRow(n) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.cssText = 'border: 1px solid gray';
        row.appendChild(div);
    }

    container.appendChild(row);
    hover();
}

for (let i = 0; i < 5; i++) {
    createRow(5);
    // hover();
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let numSquares = prompt("Enter number of squares per side");
    if ((numSquares < 1) || (numSquares > 100)) {
        alert("Numbers between 1 and 100 only");
        return;
    }
    removeBoxes();
    for (let i = 0; i < numSquares; i++) {
        createRow(numSquares);
    }
})

function removeBoxes() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function hover() {
    const boxes = document.querySelectorAll('.box')

    for (const box of boxes) {
        box.addEventListener('mouseover',() => {
            box.style.backgroundColor = 'lightblue';
        }); 
    }
}