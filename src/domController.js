function domController () {
  const body = document.querySelector('body');
  let plOneBoardDiv;
  let plTwoBoardDiv;

  const initGame = (plOneBoardObj, plTwoBoardObj) => {
    placeHeader()
    placeBoards()
    renderBoard(plOneBoardDiv, plOneBoardObj)
    renderBoard(plTwoBoardDiv, plTwoBoardObj)
    placeRandomizeBtn();
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
  };
  
  const placeHeader = () => {
    const header = document.createElement('h1');
    header.innerText = 'Battleship Game';
    header.className = 'game-header';
    body.append(header)
  };

  const placeBoards = () => {
    const boardsWrapper = document.createElement('div');
    boardsWrapper.className = "boards-wrapper";
  
    const plOneBoard = generateBoard("Player (Human Intelligence?)");
    const plOneStats = generateStatsField();
  
    const plTwoBoard = generateBoard("Artificial Intelligence");
    const plTwoStats = generateStatsField();
  
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

  const generateStatsField = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-wrapper';
  
    const header = document.createElement('h2');
    header.innerText = 'Ships in game:';
  
    wrapper.append(header);
    const shipLengths = [5, 4, 3, 3, 2]
  
    shipLengths.forEach((length) => {
      const shipMock = document.createElement('h3')
  
      shipMock.innerText = "[] ".repeat(length)
      wrapper.append(shipMock)
    })
  
    return wrapper;
  };

  function placeRandomizeBtn() {

  };

  return {
    initGame,
    renderBoard,
    plOneBoardDiv: () => {plOneBoardDiv},
    plTwoBoardDiv: () => {plTwoBoardDiv},
  }
}




module.exports = domController

