import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTurn, setCell, newGame } from '../redux/actions/actions';
import Board from './Board';

const mapStateToProps = state => ({
  board: state.state.board,
  turn: state.state.turn,
});

const mapDispatchToProps = dispatch => ({
  changeTurn: bindActionCreators(changeTurn, dispatch),
  setCell: bindActionCreators(setCell, dispatch),
  newGame: () => { dispatch(newGame()); },
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;

