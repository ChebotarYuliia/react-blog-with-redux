import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configurationStore';
import { Provider } from 'react-redux';
import App from './container/App.jsx';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('posts')
);
