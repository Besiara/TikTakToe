import React from 'react';
import NewGameButton from '../components/NewGameButton';

const Modal = props => (
  <div className="modal">
    <div>
      WINNNER IS
      <div className="winner-block">
        <span className={props.winner} />
      </div>
      <NewGameButton onButtonClick={props.onButtonClick} />
    </div>
  </div>);

export default Modal;
