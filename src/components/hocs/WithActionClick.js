import getDisplayName from '@utils/getDisplayName';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Wrap a component with an action and on click handler override
 * The Component should have an onClick handler. The event will be triggered
 * using the action as first argument and the event that was fired from the actual
 * component as the second argument.
 * @param {React.Component} Component
 */
export default function withActionClick(Component) {
  function WithActionClickComponent({ action, onClick, ...props }) {
    const handleActionClick = useCallback((event) => {
      onClick(action, event);
    }, [action, onClick]);

    return <Component onClick={handleActionClick} {...props} />;
  }

  WithActionClickComponent.displayName = `WithActionClick${getDisplayName(Component)}`;

  WithActionClickComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    action: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return WithActionClickComponent;
}
