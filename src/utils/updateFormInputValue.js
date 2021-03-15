/**
 * Update the form input value when used in a map function
 * @param {Object} input The form input to update
 * @param {any} value The form input value
 * @returns A function so that it can be used on a map function using closure
 */
export default function updateFormInputValue(input, value) {
  return (formInput) => {
    if (formInput === input) {
      return {
        ...formInput,
        value,
      };
    }

    return formInput;
  };
}
