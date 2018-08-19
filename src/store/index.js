import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { handleActions } from 'utils/store.utils';

const initialState = {};

const reducer = handleActions({}, initialState);

const logger = createLogger();

export default createStore(reducer, applyMiddleware(logger));
