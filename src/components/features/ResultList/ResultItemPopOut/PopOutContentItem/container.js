import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import PopOutContentItemComponent from './component';

function PopOutContentItemContainer({ action, onClick }) {
  const handleClick = useCallback(() => {
    onClick(action);
  });

  return <PopOutContentItemComponent action={action} onClick={handleClick} />;
}

PopOutContentItemContainer.propTypes = {
  action: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(PopOutContentItemContainer);
