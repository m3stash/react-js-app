import './Board.css';
import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';

export default class Board extends React.Component {
  renderSquare(i) {
    const { onClick, squares } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  renderRow() {
    const items = [];
    let count = 0;
    for (let i = 0; i <= 2; i += 1) {
      const childrenSquare = [];
      for (let j = 0; j <= 2; j += 1) {
        childrenSquare.push(this.renderSquare(count));
        count += 1;
      }
      items.push(<div className="board-row">{childrenSquare}</div>);
    }
    return items;
  }

  render() {
    return <div>{this.renderRow()}</div>;
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.number).isRequired,
};
