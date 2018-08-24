export const ifProp = (prop, ifTrue, ifFalse) => props => (prop in props && props[prop] ? ifTrue : ifFalse);

export const prop = (propName, useFn) => (props) => {
  const value = props[propName];

  if (!useFn) return value;

  return useFn(value);
};
