import React from 'react';
import './ImportButton.css';

export default class ImportButton extends React.Component {
  clickHandler = () => {
    // console.log(this);
  };

  render() {
    return <button onClick={this.clickHandler}>Import</button>;
  }
}
