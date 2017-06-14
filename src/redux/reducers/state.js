const initialState = {
  board: ['', '', '', '', '', '', '', '', ''],
  turn: 'x',
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case 'CHANGETURN':
      return {
        ...state,
        turn: action.turn,
      };
    case 'SETCELL':
      return {
        ...state,
        board: action.board,
      };
    case 'NEWGAME':
      return {
        ...state,
        ...initialState,
        board: ['', '', '', '', '', '', '', '', ''],
      };
    default:
      return state;
  }
}
