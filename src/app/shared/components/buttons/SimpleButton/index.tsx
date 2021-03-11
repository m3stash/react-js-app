import React from 'react';
import './SimpleButton.css';

interface ISimpleButton {
  buttonName: string,
}

function SimpleButton(props: ISimpleButton): JSX.Element {
  const { buttonName } = props;
  return <button type="button">button name :{buttonName}</button>;
}

export default SimpleButton;
