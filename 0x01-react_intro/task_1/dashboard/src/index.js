import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Notifications from './Notifications';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="root-notifications">
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
