const container = document.getElementById('container');
container.style.cssText = "min-width: 500px; min-height: 500px; display: grid;";

function setGrid() {
    gridx = prompt("How many cells in a row?")
    if (gridx < 1 || gridx > 100) {
        alert("Value must be between 1 and 100. Try again");
        return;
    } else if (/\D/.test(gridx)) {alert("Not a number! Try again"); return;}

    gridy = prompt("How many cells in a column?");
    if (gridy < 1 || gridx > 100) {
        alert("Value must be between 1 and 100. Try again");
        return;
    } else if (/\D/.test(gridy)) {alert("Not a number! Try again"); return;}

    buildGrid(gridx, gridy);
}

function buildGrid(gridx=16, gridy=16) {

    //Remove #container's all children
    container.innerHTML = "";
    //Set columns according to given value
    container.style.gridTemplateColumns = "repeat(" + gridx + ", 1fr)";

    //Create given number of divs, add border and events using loop 
    for (let i = 1; i <= gridx*gridy; i++) {
        const div = document.createElement('div');
        // div.setAttribute('id', i);
        div.style.border = '1px solid grey';
        container.appendChild(div);
        div.addEventListener('mouseenter', event => event.target.style.backgroundColor = '#c0c0c0');
        div.addEventListener('mouseleave', event => event.target.style.backgroundColor = 'rgba(0,0,0,0)');
    }
}

// Building grid with default values, i.e. 16x16
buildGrid();