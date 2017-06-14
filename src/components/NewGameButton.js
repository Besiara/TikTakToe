import React from 'react';

const NewGameButton = (props) => {
  const _onClick = () => {
    props.onButtonClick();
  };

  return <button onClick={_onClick} className="button">New Game</button>;
};

export default NewGameButton;

