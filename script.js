var gameboard = document.querySelector("#gameboard");
var gameDetails = document.querySelector("#details");

var createCell = ["","","","","","","","",""]

var go = "circle"
gameDetails.textContent = "Circle goes first"

function createBoard()
{
    createCell.forEach((cell, index) => 
    {
        var cellElement = document.createElement('div');
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', start)
        gameboard.append(cellElement)
    })
}

createBoard();

function start(e)
{
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go == "circle" ? "cross" : "circle"
    gameDetails.textContent = "It is now " + go + "'s go."
    e.target.removeEventListener('click',start)
    checkScore()
}


function checkScore() 
{
    const allSquares = document.querySelectorAll(".square");
    const winings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    let circleWin = false;
    let crossWin = false;
  
    winings.forEach(array => {
      const isCircleWin = array.every(cell =>
        allSquares[cell].firstChild?.classList.contains("circle")
      );
  
      if (isCircleWin) 
      {
        circleWin = true;
        return;
      }
    });
  
    if (circleWin) 
    {
      gameDetails.textContent = "Circle Wins!";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
      return;
    }
  
    winings.forEach(array => {
      const isCrossWin = array.every(cell =>
        allSquares[cell].firstChild?.classList.contains("cross")
      );
  
      if (isCrossWin) {
        crossWin = true;
        return;
      }
    });
  
    if (crossWin) 
    {
      gameDetails.textContent = "Cross Wins!";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
      return;
    }
  
    // If no one wins
    const isBoardFull = [...allSquares].every(square =>
      square.firstChild !== null
    );
  
    if (isBoardFull) 
    {
      gameDetails.textContent = "It's a draw! No one wins.";
    }
  }
  




