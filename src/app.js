import React from 'react';
import '../styles/index.scss';
import BoardContainer from './components/BoardContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-middle">
        <BoardContainer />
      </div>
    );
  }
}
