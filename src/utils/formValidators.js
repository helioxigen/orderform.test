const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);

export const required = value => (value || typeof value === 'number' ? undefined : 'This field is required');
export const minLength10 = minLength(10);
export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);
export const ccValid = value => (value
  && !/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
    value,
  )
  ? 'Invalid card number'
  : undefined);
