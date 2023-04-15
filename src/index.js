import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';




render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals