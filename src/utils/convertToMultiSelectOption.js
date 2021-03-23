/**
 * Convert an option to a multi select option to be used
 * by the react-multi-select-component package to display
 * selected options.
 * @param {string} option The option to convert
 */
export default function convertToMultiSelectOption(option) {
  // Only convert when the option is a string
  if (typeof option !== 'string') {
    return option;
  }

  return {
    value: option.toLowerCase(),
    label: option,
  };
}
