import React from 'react';
import './SaveButton.css';

export default class SaveButton extends React.Component {
  getData = () => {
    // make ajax call
  };

  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}
