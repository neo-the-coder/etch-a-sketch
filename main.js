const container = document.getElementById('container');

for (let i = 1; i <= 16*16; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    container.appendChild(div);
    div.addEventListener('mouseenter', event => event.target.style.backgroundColor = '#c0c0c0');
    div.addEventListener('mouseleave', event => event.target.style.backgroundColor = '#fff');

}
