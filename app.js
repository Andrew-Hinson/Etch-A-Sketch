let gridsize = document.querySelector('#gridsize');
const container = document.querySelector('#container');
const start = document.querySelector('#start');
let isGrid = true;
let mainGrid = 0;

let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

let generateGrid = () => {
    mainGrid = parseInt(gridsize.value * gridsize.value);
        for(i = 0; i < mainGrid; i++){
            const sketchDiv = document.createElement('div');
            sketchDiv.setAttribute('class', 'squares');
            sketchDiv.innerText = '(O.O)';
            container.appendChild(sketchDiv);
        }
}
generateGrid();

let activeHover = () => {
    mainGrid = parseInt(gridsize.value * gridsize.value);
    let hover = document.querySelectorAll('.squares');
    for(i = 0; i < mainGrid; i++){
        hover[i].addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = "purple";
        });
    }
}
while(isGrid){
    activeHover();
    isGrid = false;
}

gridsize.addEventListener('change', () => {
    removeAllChildNodes(container);
    generateGrid();
    isGrid = true;
    while(isGrid){
        activeHover();
        isGrid = false;
    }
});