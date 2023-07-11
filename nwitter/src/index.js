import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { app as firebase } from "./fBase";
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


