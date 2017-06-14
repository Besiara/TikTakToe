import React from 'react';

const Cell = (props) => {
  const _onClick = () => {
    props.onCellClick(props.id);
  };

  return (<div className="cell" onClick={_onClick}>
    {props.symbol && <span className={props.symbol} />}
  </div>);
};

export default Cell;
