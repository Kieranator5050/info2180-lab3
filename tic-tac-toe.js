function styleBoard(divs){
  //Function to style all elements of the board
  //Assuming parameter is array of divs
  for(let i = 0; i<divs.length; i++){
    //console.log(divs[i]);
    divs[i].className = "square";
  }
}

document.addEventListener('DOMContentLoaded', () => {
    styleBoard(document.getElementById('board').getElementsByTagName("div"));
});
