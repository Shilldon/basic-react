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
      key = {i}
    />
  )
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: () => { this.cardClick() },
      flipped: false,
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
    this.setState({flipped: !this.state.flipped})   
  }
}




ReactDOM.render(<Board />, document.getElementById('root'));