import React from 'react';
import './Morpion.scss';
import Board from './Components/Board';

interface IState {
  xIsNext: boolean;
  history: ISquare[];
  stepNumber: number;
}

interface IProps {}

interface ISquare {
  squares: string[];
}

export default class Morpion extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  private calculateWinner(squares: string[]): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  private handleClick(i: number): void {
    const { xIsNext, history, stepNumber } = this.state;
    const histo = history.slice(0, stepNumber + 1);
    const current = histo[histo.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: histo.concat([
        {
          squares,
        },
      ]),
      stepNumber: histo.length,
      xIsNext: !xIsNext,
    });
  }

  private jumpTo(step: number): void {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render(): JSX.Element {
    const { xIsNext, history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Revenir au tour n°' ${move}`
        : 'Revenir au début de la partie';
      return (
        <li key={`mv_${move.toString()}`}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ' ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}