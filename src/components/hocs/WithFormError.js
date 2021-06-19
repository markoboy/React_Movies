/* eslint-disable react/forbid-prop-types */
import getDisplayName from '@utils/getDisplayName';
import React, { useCallback } from 'react';

/**
 * Enhance a component to display an error message. The errors props should have a message
 * property which will be displayed when the error[name] is truthy.
 *
 * @param {import('react').Component} Component The component to enhance
 * @returns {import('react').Component} The enhanced component
 */
export function withFormError(Component) {
  function WithFormError({ errors, input, setValue, ...props }) {
    const { ref, onChange, onBlur, name } = input;

    // If setValue has been defined call this directly instead.
    // The onChange handler accepts an event while the setValue can set
    // the value directly to the property
    const onChangeHandler = useCallback(
      (event) => {
        if (setValue) {
          setValue(name, event, { shouldValidate: true });
        } else {
          onChange(event);
        }
      },
      [onChange, setValue]
    );

    return (
      <>
        <Component
          inputRef={ref}
          onChange={onChangeHandler}
          onBlur={onBlur}
          name={name}
          id={name}
          {...props}
        />
        {errors[name] && (
          <div className="form__error">{errors[name].message}</div>
        )}
      </>
    );
  }

  WithFormError.displayName = `WithFormError${getDisplayName(Component)}`;

  return WithFormError;
}
