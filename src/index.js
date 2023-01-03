import React from 'react';
import ReactDOM from 'react-dom';
import './Containers/Naviagtion/Frame/styles.css'
import reportWebVitals from './reportWebVitals';
import App from './Containers/RootContainer'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
