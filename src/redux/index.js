import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

const logger = createLogger();

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
