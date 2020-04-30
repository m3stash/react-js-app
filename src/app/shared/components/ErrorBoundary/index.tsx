import React from 'react';
import './ErrorBoundary.css';

interface IErrorBOundary {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, IErrorBOundary> {
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

  render(): React.ReactNode | JSX.Element {
    const { children } = this.props;
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}
