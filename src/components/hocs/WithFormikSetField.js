import getDisplayName from '@utils/getDisplayName';
import React, { useCallback } from 'react';

/**
 * Enhance a component to be used as a Formik field that needs to use setFieldValue
 * instead of the changeHandler in order to update Formik
 *
 * @param {import('react').Component} Component The component to enhance
 * @returns {import('react').Component} The enhanced component
 */
export function withFormikSetField(Component) {
  function WithFormikField({ onChange, name, ...props }) {
    const changeHandler = useCallback(
      (event) => {
        // Name is the fields name and event is the event that is emitted by the Component
        onChange(name, event);
      },
      [name, onChange]
    );

    return <Component onChange={changeHandler} name={name} {...props} />;
  }

  WithFormikField.displayName = `WithFormikSetField${getDisplayName(
    Component
  )}`;

  return WithFormikField;
}
