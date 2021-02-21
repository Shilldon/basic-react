import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = () => {
  return (
    <div className="game-board">
      <Card />
    </div>
  )
}

function renderCard() {
  return (
    <Card />
  )
}

function Card() {
  return (
    <div className="game-card"></div>
  )
}

ReactDOM.render(<Board />, document.getElementById('root'));