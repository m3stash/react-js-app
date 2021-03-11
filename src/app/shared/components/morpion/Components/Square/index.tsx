import React from 'react';

interface ISquare {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  value: string,
}

export default function Square(props: ISquare): JSX.Element {
  const { onClick, value } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}
