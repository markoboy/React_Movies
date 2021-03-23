export default function getSerializedModalFormInputs(formInputs) {
  return formInputs.reduce((computedData, input) => {
    // eslint-disable-next-line no-param-reassign
    computedData[input.name] = input.value;
    return computedData;
  }, {});
}
