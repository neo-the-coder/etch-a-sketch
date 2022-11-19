const container = document.getElementById('container');

for (let i = 1; i <= 16*16; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    container.appendChild(div);
}