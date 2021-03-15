import ResultNoFound from '@components/ResultNoFound';
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
      return <ResultNoFound />;
    }

    return this.props.children;
  }
}

ErrorBoundary.logger = new LoggerService('ErrorBoundary');
