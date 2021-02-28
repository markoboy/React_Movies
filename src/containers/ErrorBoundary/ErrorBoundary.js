import LoggerService from '@services/LoggerService';
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    ErrorBoundary.logger.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3>No Movie Found</h3>;
    }

    return this.props.children;
  }
}

ErrorBoundary.logger = new LoggerService('ErrorBoundary');
