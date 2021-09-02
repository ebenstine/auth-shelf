import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootSaga from './redux/sagas/_root.saga';
import rootReducer from './redux/reducers/_root.reducer';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import store from './redux/store';

import App from './components/App/App';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,

applyMiddleware(sagaMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
