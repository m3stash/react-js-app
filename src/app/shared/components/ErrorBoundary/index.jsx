import PropTypes from 'prop-types';
import React from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState((state) => ({ ...state, hasError: true }));
  }

  render() {
    const { hasError, children } = this.props;
    if (hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  hasError: PropTypes.bool,
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  hasError: false,
  children: null,
};
