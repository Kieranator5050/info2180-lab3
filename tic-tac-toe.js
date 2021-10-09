let gamestatus = 1;
function checkStatus(status, div){
  if(status%2==0){
    //console.log("O");
    div.innerHTML = "O";
  } else {
    //console.log("X");
    div.innerHTML = "X";
  }
}

function initBoard(divs){
  //Function to style all elements of the board
  //Assuming parameter is array of divs
  for(let i = 0; i<divs.length; i++){

    //Set class to Square
    divs[i].classList.add("square");

    //Add Event Listeners
    let isClicked = false;
    divs[i].addEventListener("click", ()=>{
      //If not clicked check for the following
      if(!isClicked){
          //console.log("Clicked , ", divs[i]);
          isClicked = true;
          //Pass in game status parameter
          checkStatus(gamestatus, divs[i]);
          gamestatus++;
      }
    });

    divs[i].addEventListener("mouseover", ()=>{
      //console.log("Hovered over ", divs[i]);
      divs[i].classList.add("hover");
    });
    divs[i].addEventListener("mouseout", ()=>{
      //console.log("Hovered over ", divs[i]);
      divs[i].classList.remove("hover");
    });

  }
}

document.addEventListener('DOMContentLoaded', () => {
    initBoard(document.getElementById('board').getElementsByTagName("div"));
});
