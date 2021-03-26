import ResultNoFound from '@components/common/ResultNoFound';
import LoggerService from '@services/LoggerService';
import React from 'react';

export default class ErrorBoundaryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    ErrorBoundaryContainer.logger.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ResultNoFound />;
    }

    return this.props.children;
  }
}

ErrorBoundaryContainer.logger = new LoggerService('ErrorBoundary');
