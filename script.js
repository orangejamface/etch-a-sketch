const container = document.querySelector('#container'); //target container to place 16 divs within
let divAmount = 16;  // the amount of divs


function createEtchBoard() {        //new function to create divs inside container on html
    for (i = 0; i < divAmount*divAmount; i ++ ) {
        let boardDiv = document.createElement("div");
        boardDiv.className = "gridDivs";
        boardDiv.style.cssText = `border: 1px dashed white; width: 10px; height: 10px;`;  //give each div a 10px by 10px size
        container.appendChild(boardDiv);
  }};

    createEtchBoard();







