let gridsize = document.querySelector('#gridsize');
const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
let colorpicker = document.querySelector('#colorpicker');
let isGrid = true;
let mainGrid = 0;

let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

let generateGrid = (rows, cols) => {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for(i = 0; i < (rows * cols); i++){
            let sketchDiv = document.createElement('div');
            sketchDiv.setAttribute('class', 'squares');
            container.appendChild(sketchDiv);
        }
}

generateGrid(16, 16);

let activeHover = () => {
    mainGrid = parseInt(gridsize.value * gridsize.value);
    let hover = document.querySelectorAll('.squares');
    for(i = 0; i < mainGrid; i++){
        hover[i].addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = colorpicker.value;
        });
    }
}
while(isGrid){
    activeHover();
    isGrid = false;
}

gridsize.addEventListener('change', () => {
    removeAllChildNodes(container);
    generateGrid(parseInt(gridsize.value), parseInt(gridsize.value))
    isGrid = true;
    while(isGrid){
        activeHover();
        isGrid = false;
    }
});
reset.addEventListener('click', () => {
    removeAllChildNodes(container);
    generateGrid(parseInt(gridsize.value), parseInt(gridsize.value))
    isGrid = true;
    while(isGrid){
        activeHover();
        isGrid = false;
    }
});
// colorpicker.addEventListener('change', () => {
//     activeHover
// })