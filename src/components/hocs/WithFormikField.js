import getDisplayName from '@utils/getDisplayName';
import { useField } from 'formik';
import React from 'react';

/**
 * Enhance a component to be used as a Formik field, to handle
 * fields updates and validation. Helpers are passed down to components
 * in order to implement custom handlers if it is required.
 *
 * @param {import('react').Component} Component The component to enhance
 * @returns {import('react').Component} The enhanced component
 */
export function withFormikField(Component) {
  function WithFormikField({ ...props }) {
    const [field, meta, helpers] = useField(props);

    return (
      <>
        <Component helpers={helpers} {...field} {...props} />
        {meta.touched && meta.error && (
          <div className="form__error">{meta.error}</div>
        )}
      </>
    );
  }

  WithFormikField.displayName = `WithFormikField${getDisplayName(Component)}`;

  return WithFormikField;
}
