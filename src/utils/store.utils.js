import merge from 'lodash/merge';

export function handleActions(handlers, initialState) {
  return function reducer(state = initialState, action) {
    const { type, payload } = action;

    if (type in handlers) {
      const update = handlers[type];

      const stateUpdate = update(payload);

      return merge(stateUpdate, state);
    }

    return state;
  };
}

export const x = 1;
