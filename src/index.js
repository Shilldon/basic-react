import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = () => {
  const gameBoard = [];

    for (let i=0;i<=4;i++) {
      gameBoard.push(renderCard(i));
    }

  return (
    <div className="game-board d-flex flex-row">
      {gameBoard}
    </div>
  )
}

function renderCard(i) {
  return (
    <Card 
      key={i}
    />
  )
}

function Card() {
  return (
    <div className="game-card"></div>
  )
}

ReactDOM.render(<Board />, document.getElementById('root'));