const shipFive = require('./images/ship-5.svg');
const shipFour = require('./images/ship-4.png');
const shipThree = require('./images/ship-3.png');
const shipTwo = require('./images/ship-2.svg');

console.log(shipFive)

function domController () {
  const body = document.querySelector('body');

  let plOneBoardDiv;
  let plTwoBoardDiv;
  let randomizeBtn;
  let startBtn; 
  let restartBtn;

  const getPlOneBoardDiv = () => plOneBoardDiv
  const getPlTwoBoardDiv = () => plTwoBoardDiv;
  const getRandomizeBtn = () => randomizeBtn;
  const getStartBtn = () => startBtn;
  const getRestartBtn = () => restartBtn;

  const initGame = (plOneBoardObj, plTwoBoardObj) => {
    body.innerHTML = "";
    placeHeader(); 
    placeBoards();
    renderBoard(plOneBoardDiv, plOneBoardObj);
    renderBoard(plTwoBoardDiv, plTwoBoardObj);
    placeMenu();
  };

  const renderBoard = (board, gameBoardObj) => {
    board.innerHTML = "";
    gameBoardObj.board.forEach((rowObj) => {
        rowObj.forEach((cellObj) => {
          const cell = document.createElement('div');
          cell.className = "cell";
          if(cellObj.shipHere) {cell.classList.add('has-ship')}
          if(cellObj.isHit) {cell.classList.add('is-hit')}
          board.append(cell);
        })
      });

    board.className == "player-board" ? 
    renderStatsField(document.querySelector('.player-stats-wrapper'), gameBoardObj) :
    renderStatsField(document.querySelector('.ai-stats-wrapper'), gameBoardObj)
  };
  
  const placeHeader = () => {
    const header = document.createElement('h1');
    header.innerText = '⛴ Battleship Game ⛴';
    header.className = 'game-header';
    body.append(header)
  };

  const placeBoards = () => {
    const boardsWrapper = document.createElement('div');
    boardsWrapper.className = "boards-wrapper";
  
    const plOneBoard = generateBoard("Human Intelligence?");
    const plOneStats = generateStatsField('player-stats-wrapper');
  
    const plTwoBoard = generateBoard("Artificial Intelligence");
    const plTwoStats = generateStatsField('ai-stats-wrapper');
  
    boardsWrapper.append(plOneStats)
    boardsWrapper.append(plOneBoard);
  
    boardsWrapper.append(plTwoBoard);
    boardsWrapper.append(plTwoStats)
  
    body.append(boardsWrapper)
  };
  
  const generateBoard = (plName) => {
    const wrapper = document.createElement('div');
    const playerHeader = document.createElement('h2');
    playerHeader.innerText = plName;
    wrapper.append(playerHeader);

    if(plName==="Artificial Intelligence") {
      plTwoBoardDiv = document.createElement('div');
      plTwoBoardDiv.className = "ai-board";
      wrapper.className = "ai-board-wrapper";
      wrapper.append(plTwoBoardDiv);
    } else {
      plOneBoardDiv = document.createElement('div');
      plOneBoardDiv.className = "player-board";
      wrapper.className = "player-board-wrapper";
      wrapper.append(plOneBoardDiv);
    };
  
    return wrapper
  };

  const generateStatsField = (clName) => {
    const wrapper = document.createElement('div');
    wrapper.className = clName;
    return wrapper;
  };

  const renderStatsField = (statsBoardDiv, gameBoardObj) =>{
    statsBoardDiv.innerHTML = "";

    const shipsInGameDiv = document.createElement('div');
    shipsInGameDiv.innerHTML = '<h2>Ships in game:</h2>'
    

    const sunkenShipsDiv = document.createElement('div');
    sunkenShipsDiv.innerHTML = '<h2>Sunken ships:</h2>'
    for(const ship of gameBoardObj.allShips) {
      let imgSource;
      switch(ship.length) {
        case 5 : imgSource=shipFive; break;
        case 4 : imgSource=shipFour; break;
        case 3 : imgSource=shipThree; break; 
        case 2 : imgSource=shipTwo; break;
      };
      let img = new Image();
      img.src = imgSource;
      img.className = 'ship-img';      
      ship.isSunk() ? sunkenShipsDiv.append(img) : shipsInGameDiv.append(img);
      ship.isSunk() ? sunkenShipsDiv.innerHTML += "<br>" : shipsInGameDiv.innerHTML += "<br>";
    }
    statsBoardDiv.append(shipsInGameDiv);
    statsBoardDiv.append(sunkenShipsDiv);
  }

  const placeMenu = () => {
    const menu = document.createElement('div');
    menu.className = 'menu';
    menu.append(placeRandomizeBtn());
    menu.append(placeStartGameBtn());
    menu.append(placeRestartGameBtn());
    body.append(menu);
  };

  const placeRandomizeBtn = () => {
    randomizeBtn = document.createElement('button');
    randomizeBtn.innerText = "⚙️ Randomize Placement ⚙️";
    return randomizeBtn;
  };

  const placeStartGameBtn = () => {
    startBtn = document.createElement('button');
    startBtn.innerText = "☸️ Begin Game ☸️";
    return startBtn;
  };

  const placeRestartGameBtn = () => {
    restartBtn = document.createElement('button');
    restartBtn.innerText = "🔁 Restart Game 🔁";
    restartBtn.style.visibility = 'hidden';
    return restartBtn;
  };

  const hideIrrelevantButtons = () => {
    randomizeBtn.style.visibility = 'hidden';
    startBtn.style.visibility = 'hidden';
    restartBtn.style.visibility = 'visible';
  };


  return {
    initGame,
    renderBoard,
    getPlOneBoardDiv,
    getPlTwoBoardDiv,
    getRandomizeBtn,
    getStartBtn,
    getRestartBtn,
    hideIrrelevantButtons,
  }
}




module.exports = domController

