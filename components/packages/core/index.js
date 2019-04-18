import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ACF_STORE_NAME } from './constants';
import { saveState, loadState } from './utils/persistStore';
import rootReducer from './reducers';

const initCreateStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

if (!window[ACF_STORE_NAME]) {
  const persistedState = loadState(ACF_STORE_NAME);
  window[ACF_STORE_NAME] = initCreateStore(persistedState);

  window[ACF_STORE_NAME].subscribe(() => {
    saveState(ACF_STORE_NAME, window[ACF_STORE_NAME].getState());
  });
}

const product =
  drupalSettings.acf_blocks !== undefined &&
  drupalSettings.acf_blocks.product !== undefined
    ? {
        ...drupalSettings.acf_blocks.product
      }
    : null;

export const withAcfStore = Component => {
  return (
    <Provider store={window[ACF_STORE_NAME]}>
      <Component product={product} />
    </Provider>
  );
};

export default withAcfStore;
