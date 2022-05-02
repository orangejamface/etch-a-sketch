const container = document.querySelector('#container'); //target container to place 16 divs within
let divAmount = 16;  // the amount of divs
let square = document.querySelector('.gridDivs');

let reset8 = document.querySelector('.btn8');
reset8.addEventListener('click', create8);
let reset16 = document.querySelector('.btn16');
reset16.addEventListener('click', create16);
let reset32 = document.querySelector('.btn32');
reset32.addEventListener('click', create32);
let reset64 = document.querySelector('.btn64');
reset64.addEventListener('click', create64);
let reset128 = document.querySelector('.btn128');
reset128.addEventListener('click', create128);

function create8() {
  divAmount = 8;
  reset();
}
function create16() {
  divAmount = 16;
  reset();
}
function create32() {
  divAmount = 32;
  reset();
}
function create64() {
  divAmount = 64;
  reset();
}
function create128() {
  divAmount = 128;
  reset();
}

function reset() {   //function to remove board and then create new board 
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createEtchBoard();
}





function changeColor (e) {    //function to change background color, function will be called when mouseove event occurs
  e.target.style.backgroundColor = '#8a2be2';
}



function createEtchBoard() {        //function to create board inside container div
    for (i = 0; i < divAmount*divAmount; i ++ ) {
        let boardDiv = document.createElement("div");
        boardDiv.className = "gridDivs";

        if (divAmount === 16) {    //board paintable square sizes depend on value of boardDiv, this is 16 by default but set by buttons pressed when reseting
          boardDiv.style.cssText = `border: 1px solid white; width: 40px; height: 40px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 8 )
        {
          boardDiv.style.cssText = `border: 1px solid white; width:80px; height: 80px;`; 
          container.appendChild(boardDiv);
        }
        else if (divAmount === 32 )
        {
          boardDiv.style.cssText = `border: 1px solid white; width:20px; height: 20px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 64 )
        {
          boardDiv.style.cssText = `border: 1px solid white; width:10px; height: 10px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 128 )
        {
          boardDiv.style.cssText = `border: 1px solid white; width:5px; height: 5px;`;  
          container.appendChild(boardDiv);
        }
    };
};

    createEtchBoard();
    container.addEventListener('mouseover', changeColor) 





