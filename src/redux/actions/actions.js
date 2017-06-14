export const changeTurn = turn => ({
  type: 'CHANGETURN',
  turn: turn === 'x' ? 'o' : 'x',
});

export const setCell = (board, index, turn) => ({
  type: 'SETCELL',
  board: [...board.slice(0, index), board[index] = turn, ...board.slice(index + 1)],
});

export const newGame = () => ({
  type: 'NEWGAME',
});
