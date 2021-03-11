import React from 'react';
import './ImportButton.css';

export default class ImportButton extends React.Component {
  clickHandler = (): void => {
    // console.log(this);
  };

  render(): JSX.Element {
    return (
      <button type="button" onClick={this.clickHandler}>
        Import
      </button>
    );
  }
}
