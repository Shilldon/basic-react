import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = () => {
  const gameBoard = [];
    for (let i=0;i<=5;i++) {
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
      key = {i}
      flipped = {false}
    />
  )
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: () => { this.cardClick() }
    }
  
  }

  render() {
    let flippedStatus = "unflipped-card"
    if(this.state.flipped) {
      flippedStatus = "flipped-card";
    }
    return (
      <div className={"game-card "+flippedStatus} onClick={this.state.onClick}></div>
    )
  }

  cardClick() {
    this.setState({flipped: !this.state.flipped});
    setTimeout( () => this.unflipCard(), Math.floor((Math.random() * 2000) +250));  

  }

  unflipCard() {
    if(!checkWinner()) {
      this.setState({flipped: !this.state.flipped})
    }
  }
}

function checkWinner() {
  let allCardsFlipped = true;
  document.querySelectorAll("div.game-card").forEach((item, index) => {
    if(item.classList.contains("unflipped-card")) {
      allCardsFlipped = false;
    }
  })    
  return allCardsFlipped;
}


ReactDOM.render(<Board />, document.getElementById('root'));