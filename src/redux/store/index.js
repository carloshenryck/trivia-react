import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

if (window.Cypress) {
  window.store = store;
}

export default store;
