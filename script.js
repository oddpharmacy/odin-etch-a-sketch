const container = document.querySelector('.container');

function createRow() {
    const row = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.textContent = 'x';
        div.className = 'box';
        div.style.cssText = 'width: 15px; height: 15px; border: 1px solid black';
        row.appendChild(div);
    }
    container.appendChild(row);
}

for (let i = 0; i < 16; i++) {
    createRow();
}

const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
    box.addEventListener('mouseover',() => {
        box.style.backgroundColor = 'lightblue';
    });
});
