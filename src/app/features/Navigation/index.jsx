import PropTypes from 'prop-types';
import React from 'react';
import './Navigation.scss';

export default class Navigation extends React.Component {
  createMenu() {
    const { routes } = this.props;
    const render = routes.map((route, i) => {
      if (route.name) {
        return (
          <li key={`route_${i.toString()}`}>
            <a href={route.path}>{route.name}</a>
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

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string,
      component: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
};
