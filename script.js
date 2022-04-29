const container = document.querySelector('#container'); //target container to place 16 divs within

// const div1 = document.createElement('div');
// div1.classList.add('div1');
// div1.textContent = '1';


function createDiv() {        //function to create a div 
    let boardDiv = document.createElement("div");

    boardDiv.className = "grid-o-Divs";
    boardDiv.innerText = "1";
    boardDiv.style.cssText = 'border: 2px dashed black;';
    return boardDiv;   //return created div

  }

  function createBoard() {      //function to create 16 divs within div id='container', container exists in html
    let container = document.getElementById("container"),  //target container div
      myDivs = [];  //empty array for divs to be placed in
      divAmount = 16;  //number of divs needed within container
    
    for (i = 0; i < divAmount; i += 1) {
      myDivs.push(createDiv());
      container.appendChild(myDivs[i]);  //place divs within div id='container'
    }
};

    createBoard();







