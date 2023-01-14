const container = document.querySelector('.container');

function createRow(n) {
    const row = document.createElement('div');
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.textContent = 'x';
        div.className = 'box';
        div.style.cssText = 'width: 15px; height: 15px; border: 1px solid black';
        row.appendChild(div);

        const boxes = document.querySelectorAll('.box')

        boxes.forEach((box) => {
            box.addEventListener('mouseover',() => {
                box.style.backgroundColor = 'lightblue';
            });
        });
    }
    container.appendChild(row);
}

for (let i = 0; i < 16; i++) {
    createRow(16);
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

