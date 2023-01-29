import React from 'react';
import ReactDOM from 'react-dom';
import './App/App.css';
import App from './App/App';
import Notifications from './Notifications/Notifications';


ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
