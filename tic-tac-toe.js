let gamestatus = 0;
let winstatus = false;

//Determines if an X or O should be inserted
function checkStatus(status, div){
  if(status%2==0){
    //console.log("O");
    div.innerHTML = "X";
    return "X";
  } else {
    //console.log("X");
    div.innerHTML = "O";
    return "O";
  }
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function checkWinner(divs){
  console.log("--------------");
  //console.log(divs.length)
  let checkArr = [];
  let tempArr = [];
  let checkArr2 = [];
  let rLetters = Math.sqrt(divs.length);//Number of Rows & Columns is nxn grid
  let oLetter = "O "; let oArr = oLetter.repeat(rLetters).split(" "); oArr.pop();
  let xLetter = "X "; let xArr = xLetter.repeat(rLetters).split(" "); xArr.pop();
  //console.log(oArr,xArr);

  //Checking Columns & Rows & Diagonal
  for(let j=0; j<rLetters; j++){

    //Columns
    for(let i=j; i<divs.length; i+=rLetters){
      //console.log(i);
      checkArr.push(divs[i].innerHTML);
    }
    //Rows
    for(let i=j*rLetters; i<(j*rLetters+rLetters); i+=1){
      //console.log(i);
      checkArr2.push(divs[i].innerHTML);
    }
    //Diagonal
    if(divs[0].innerHTML==divs[4].innerHTML && divs[4].innerHTML==divs[8].innerHTML
    && divs[0].innerHTML.length>0 && divs[4].innerHTML.length>0 && divs[8].innerHTML.length>0){
      return true;
    }
    if(divs[2].innerHTML==divs[4].innerHTML && divs[4].innerHTML==divs[6].innerHTML
    && divs[2].innerHTML.length>0 && divs[4].innerHTML.length>0 && divs[6].innerHTML.length>0){
      return true;
    }

    //console.log(checkArr, oArr); console.log(checkArr, xArr);
    console.log(checkArr2, oArr); console.log(checkArr2, xArr);
    if(arrayEquals(checkArr,oArr) || arrayEquals(checkArr,xArr)
    || arrayEquals(checkArr2,oArr) || arrayEquals(checkArr2,xArr)){
      return true;
    }
    checkArr = [];
    checkArr2 =[];
  }
  return false;
}

//Initialize board with styling and checks
function initBoard(divs){
  //Assuming parameter is array of divs
  for(let i = 0; i<divs.length; i++){
    //Set class to Square
    divs[i].innerHTML = "";
    divs[i].classList.add("square");
    divs[i].id = i;
    //Add Event Listeners
    let isClicked = false;
    divs[i].addEventListener("click", ()=>{
      //If not clicked check for the following
        if(!isClicked && !winstatus){
            isClicked = true;
            //Pass in game status parameter
            let currVal = checkStatus(gamestatus, divs[i]);
            if(checkWinner(divs)){
              let winDiv = document.getElementById('status');
              winDiv.classList.add("you-won");
              winDiv.innerHTML = "Congratulations! "+currVal+" is the winner!";
              winstatus = true;
            }
            gamestatus++;
        }
        if(gamestatus>8){
          console.log("Game Over");
        }
    });

    divs[i].addEventListener("mouseover", ()=>{
      divs[i].classList.add("hover");
    });
    divs[i].addEventListener("mouseout", ()=>{
      divs[i].classList.remove("hover");
    });
  }

  //Adding Event listener to reset
  document.getElementsByClassName("btn")[0].addEventListener("click", ()=>{
    window.location.reload();
    /*console.log("Clicked");
    gamestatus = 0;
    let winDiv = document.getElementById('status');
    winDiv.classList.remove("you-won");
    winDiv.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    initBoard(divs);*/
  });

}

document.addEventListener('DOMContentLoaded', () => {
    initBoard(document.getElementById('board').getElementsByTagName("div"));
});
