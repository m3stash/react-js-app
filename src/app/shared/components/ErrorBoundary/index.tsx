import React, { ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface State {
  hasError: boolean;
}
interface Error {
  stack?: string;
}
interface Props {
  children: ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // eslint-disable-next-line no-console
    console.log(error);
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
    this.setState((state) => ({ ...state, hasError: true }));
  }

  render(): React.ReactNode | JSX.Element {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}
