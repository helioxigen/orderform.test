export const required = value => (value || typeof value === 'number' ? undefined : 'This field is required');

const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
export const minLength10 = minLength(10);

export const exactLength = len => value => (value && value.length !== len ? `Must be ${len} length` : undefined);

export const isNot111 = value => (value && value === '111'
  ? 'Value is restricted by U.S. federal law'
  : undefined);

export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

// export const addressValidation = fields =>
const ccRegex = {
  master: /^5[1-5][0-9]{14}$/,
  american: /^3[47][0-9]{13}$/,
  maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
};

export const ccValid = value => (value && !Object.values(ccRegex).some(regex => regex.test(value))
  ? 'Invalid card number'
  : undefined);

export const detectCardType = num => Object.entries(ccRegex).reduce(
  (types, [type, regex]) => (regex.test(num) ? types.concat(type) : types),
  [],
);

export const validateGroupedFields = (pathKeys, excludeKeys) => (values) => {
  const errors = {};

  pathKeys.forEach((pathKey) => {
    const fields = values[pathKey];
    console.log('fields', fields);
    if (!fields) return;

    if (pathKey === 'billing' && values.shippingAddressAsBilling) return;
    console.log(pathKey === 'billing' && values.shippingAddressAsBilling);

    Object.entries(fields)
      .filter(([key]) => !excludeKeys.includes(key))
      .forEach(([key, value]) => {
        console.log('value', value);
        if (!value) {
          errors[pathKey][key] = 'This field is required';
        }
      });
  });

  console.log(errors, values);

  return errors;
};
