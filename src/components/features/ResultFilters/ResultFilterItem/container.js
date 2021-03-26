import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import ResultFilterItemComponent from './component';
import './styles.scss';

function ResultFilterItemContainer({
  children,
  isActive,
  classes,
  filter,
  onClick,
}) {
  const className = useMemo(
    () => (
      clsx('result-filter__item', classes, {
        'result-filter__item--active': isActive,
      })
    ),
    [classes, isActive]
  );

  const handleClick = useCallback(() => onClick && onClick(filter), [filter]);

  return (
    <ResultFilterItemComponent classes={className} onClick={handleClick}>
      {children}
    </ResultFilterItemComponent>
  );
}

ResultFilterItemContainer.defaultProps = {
  isActive: false,
  classes: '',
  filter: null,
  onClick: null,
};

ResultFilterItemContainer.propTypes = {
  isActive: PropTypes.bool,
  classes: PropTypes.string,
  filter: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default ResultFilterItemContainer;
