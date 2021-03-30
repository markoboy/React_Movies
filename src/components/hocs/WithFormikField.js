/* eslint-disable react/forbid-prop-types */
import getDisplayName from '@utils/getDisplayName';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Enhance a component to be used as a Formik field, to handle
 * fields updates and validation. Touched and errors should be passed
 * in as props in order to display the error for the field. Values
 * and name should be included in order to be passed down to the component.
 *
 * @param {import('react').Component} Component The component to enhance
 * @returns {import('react').Component} The enhanced component
 */
export function withFormikField(Component) {
  function WithFormikField({ touched, errors, values, name, ...props }) {
    return (
      <>
        <Component value={values[name]} name={name} {...props} />
        {touched[name] && errors[name] && (
          <div className="form__error">{errors[name]}</div>
        )}
      </>
    );
  }

  WithFormikField.displayName = `WithFormikError${getDisplayName(Component)}`;

  WithFormikField.propTypes = {
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  };

  return WithFormikField;
}
