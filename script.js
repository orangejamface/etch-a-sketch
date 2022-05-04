const container = document.querySelector('#container'); //target container to place 16 divs within
let divAmount = 16;  

function numGen(mx) {  //random number between 0 and 255 function
  return Math.floor(Math.random() * mx);
}

// reset etch grid buttons to different sizes
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

// corresponding functions for new grid sizes
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


function reset() {   // function to remove board and then create new board, called within new board functions above, which is triggered by buttonevent listener
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createEtchBoard();
}

let colorRed = document.querySelector('.btnRed');  
colorRed.addEventListener('click', paintRed);
let colorGreen = document.querySelector('.btnGreen');
colorGreen.addEventListener('click', paintGreen);
let colorBlue = document.querySelector('.btnBlue');
colorBlue.addEventListener('click', paintBlue);
let colorMulti = document.querySelector('.btnMulti');
colorMulti.addEventListener('click', paintMulti);
let colorShade = document.querySelector('.btnShade');
colorShade.addEventListener('click', paintShade);

let paintColor = '#8a2be2'; //default color
let red = '#ff0000';

function paintRed() {
  container.removeEventListener('mouseover', randomColor);
  paintColor = red
};
function paintGreen() {
  container.removeEventListener('mouseover', randomColor);
  paintColor = '#229d00'
};
function paintBlue() {
  container.removeEventListener('mouseover', randomColor);
  paintColor = '#3c00ff'
};
function paintMulti() {
  container.removeEventListener('mouseover', randomColor);
  paintColor = rgb;
};
function paintShade() {
  container.removeEventListener('mouseover', randomColor);
  paintColor = '#ffffff'
};

let rgb;

function randomColor() {
  paintColor = `rgb(${numGen(255)},${numGen(255)},${numGen(255)})`
}



container.addEventListener('mousedown', painting) //trigger function to paint/change color of background when mouse click is held down
let clicking = true;
document.addEventListener("mouseup", ceaseClick);
function ceaseClick(){  
  clicking = false;
}


function painting() {  //function to change color when clicked
  container.addEventListener('mouseover', function(e)  {
    if (!clicking) return;  // exit painting once clicking has ceased
    if (paintColor === rgb) {
      container.addEventListener('mouseover', randomColor);
    }
      e.target.style.backgroundColor = paintColor
  }); 
  clicking = true; //set click back to true ready for next mouseIsDown function call
}


container.addEventListener('touchstart', touchingScreen) //basically a repear of lines 46-60 but altered to work with a touchscreen
let touching = true;  
document.addEventListener("touchend", ceaseTouch);
function ceaseTouch(){  
  touching = false;
}
function touchingScreen() {  
  container.addEventListener('touchmove', function(e)  {
    if (!touching) return; 
    e.target.style.backgroundColor = '#8a2be2';
  }); 
  touching = true; 
}

function createEtchBoard() {        //function to create etch board inside container div
    for (i = 0; i < divAmount*divAmount; i ++ ) {
        let boardDiv = document.createElement("div");
        boardDiv.className = "gridDivs";

        if (divAmount === 16) {    //etchboard square sizes depend on value of boardDiv, this is 16 by default but set by buttons pressed when reseting
          boardDiv.style.cssText = `width: 40px; height: 40px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 8 )
        {
          boardDiv.style.cssText = `width:80px; height: 80px;`; 
          container.appendChild(boardDiv);
        }
        else if (divAmount === 32 )
        {
          boardDiv.style.cssText = `width:20px; height: 20px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 64 )
        {
          boardDiv.style.cssText = `width:10px; height: 10px;`;  
          container.appendChild(boardDiv);
        }
        else if (divAmount === 128 )
        {
          boardDiv.style.cssText = `width:5px; height: 5px;`;  
          container.appendChild(boardDiv);
        }
    };
};


createEtchBoard();




