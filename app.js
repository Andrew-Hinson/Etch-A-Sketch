let gridsize = document.querySelector('#gridsize');
const container = document.querySelector('#container');

for(i = 0; i < 256; i++){
    const sketchDiv = document.createElement('div');
    sketchDiv.setAttribute('class', 'squares');
    sketchDiv.innerText = 'div';
    container.appendChild(sketchDiv);
}
let hover = document.querySelectorAll('.squares');

for(i = 0; i < 256; i++){
    hover[i].addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "purple";
    });
}