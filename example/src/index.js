import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import configureStore from './store/configureStore';


const configured = configureStore();
window.store = configured.store;

ReactDOM.render(
  <React.StrictMode>
    <Provider {...configured}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
