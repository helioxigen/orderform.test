export const ifProp = (prop, ifTrue, ifFalse) => props => (props[prop] ? ifTrue : ifFalse);

export const useProp = (prop, fn) => props => fn(props[prop]);
