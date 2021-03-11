import './Board.css';
import React from 'react';
import Square from '../Square';

interface IBoard {
  onClick: (i: number) => void;
  squares: string[];
}

export default class Board extends React.Component<IBoard> {
  private renderSquare(i: number): JSX.Element {
    const { onClick, squares } = this.props;
    return <Square key={`square-${i}`} value={squares[i]} onClick={() => onClick(i)} />;
  }

  private renderRow(): JSX.Element[] {
    const items:JSX.Element[] = [];
    let count = 0;
    for (let i = 0; i <= 2; i += 1) {
      const childrenSquare:JSX.Element[] = [];
      for (let j = 0; j <= 2; j += 1) {
        childrenSquare.push(this.renderSquare(count));
        count += 1;
      }
      items.push(
        <div key={`row-${i}`} className="board-row">
          {childrenSquare}
        </div>,
      );
    }
    return items;
  }

  render(): JSX.Element {
    return <div>{this.renderRow()}</div>;
  }
}
