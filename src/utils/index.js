export const ifProp = (prop, ifTrue, ifFalse) => props => (prop in props && props[prop] ? ifTrue : ifFalse);

export const useProp = (prop, fn) => props => fn(props[prop]);

export const prop = propName => props => props[propName];
