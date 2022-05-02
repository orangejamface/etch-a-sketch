const container = document.querySelector('#container'); //target container to place 16 divs within
let divAmount = 16;  // the amount of divs
let square = document.querySelector('.gridDivs')


function changeColor (e) {    //simple function to change background color, function will be called when mouseove event occurs
  e.target.style.backgroundColor = '#8a2be2';
}

function createEtchBoard() {        //function to create divs inside container div
    for (i = 0; i < divAmount*divAmount; i ++ ) {
        let boardDiv = document.createElement("div");
        boardDiv.className = "gridDivs";
        boardDiv.style.cssText = `border: 1px solid white; width: 40px; height: 40px;`;  //give each div a 10px by 10px size
        container.appendChild(boardDiv);
    };
};

    createEtchBoard();
    container.addEventListener('mouseover', changeColor) 



