import React from 'react';
import { IRoute } from '../../core/Interfaces/IRoute';
import './Navigation.scss';

export default class Navigation extends React.Component<IRoute[]> {
  createMenu(): (JSX.Element | null)[] {
    const array = this.props;
    const render = Object.keys(array).map((key, index) => {
      const { path, name } = array[key];
      if (name) {
        return (
          <li key={`route_${index.toString()}`}>
            <a href={path}>{name}</a>
          </li>
        );
      }
      return null;
    });
    return render;
  }

  render(): JSX.Element {
    return <ul className="container">{this.createMenu()}</ul>;
  }
}
