import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import { handleActions } from 'utils/store.utils';

const initialState = {};

const rootReducer = handleActions({}, initialState);

const logger = createLogger();

export default createStore(
  combineReducers({ form: formReducer }),
  applyMiddleware(logger),
);
