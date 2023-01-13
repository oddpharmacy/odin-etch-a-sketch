const container = document.querySelector('.container');

function createRow() {
    const row = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.textContent = "x";
        div.style.cssText = 'width: 30px; height: 30px; border: 1px solid black';
        row.appendChild(div);
    }
    container.appendChild(row);
}

for (let i = 0; i < 16; i++) {
    createRow();
}