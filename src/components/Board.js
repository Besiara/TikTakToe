import React, { Component } from 'react';
import Cell from './Cell';
import NewGameButton from './NewGameButton';
import Modal from './Modal';

import variants from './../config/winWariants';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.cellClick = this.cellClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = { winner: '' };
  }

  cellClick(index) {
    const { board, setCell, changeTurn, turn } = this.props;
    if (board[index] === '') {
      setCell(board, index, turn);
      this.checkIfWin();
      changeTurn(turn);
    }
  }

  checkIfWin() {
    const { board, turn } = this.props;
    variants.map((variant) => {
      if (board[variant[0]] !== '' && board[variant[1]] !== '' && board[variant[2]] !== ''
        && board[variant[0]] === board[variant[1]] && board[variant[1]] === board[variant[2]]) {
        return this.setState({ winner: turn });
      }
    });
  }

  buttonClick() {
    this.props.newGame();
    this.setState({ winner: '' });
  }

  renderCells() {
    return this.props.board.map((cell, index) =>
      <Cell key={index} id={index} onCellClick={this.cellClick} symbol={cell} />);
  }

  render() {
    return (
      <div className="board">
        {this.props.board && this.renderCells()}
        <NewGameButton onButtonClick={this.buttonClick} />
        {this.state.winner &&
          <Modal onButtonClick={this.buttonClick} winner={this.state.winner} />}
      </div>
    );
  }
}
