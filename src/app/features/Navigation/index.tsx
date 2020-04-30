import React from 'react';
import './Navigation.scss';
import { IRoute } from '../../core/Interfaces/IRoute';

export default class Navigation extends React.Component<IRoute[]> {
  private createMenu(): (JSX.Element | null)[] {
    const render = Object.keys(this.props).map((key, index) => {
      if (this.props[key].name) {
        return (
          <li key={`route_${index.toString()}`}>
            <a href={this.props[key].path}>{this.props[key].name}</a>
          </li>
        );
      }
      return null;
    });
    return render;
  }

  render() {
    return <ul className="container">{this.createMenu()}</ul>;
  }
}
