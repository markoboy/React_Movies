import Button from '@components/common/Forms/Button';
import PropTypes from 'prop-types';
import React from 'react';

function PopOutContentItemComponent({ action, onClick }) {
  return (
    <Button
      classes="btn--full-width btn--secondary pop-out-content__item"
      onClick={onClick}
    >
      {action}
    </Button>
  );
}

PopOutContentItemComponent.propTypes = {
  action: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PopOutContentItemComponent;
