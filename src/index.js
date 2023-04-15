import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './_helpers';




render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('app')
);


