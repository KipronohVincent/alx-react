import React from 'react';
import './Notifications.css';
import * as Utils from '../utils';
import NotificationItem from './NotificationItem';

function Notifications(props) {
  return (
    <React.Fragment>
      <div className="menuItems">Your notifications</div>
      {props.displayDrawer
        ? (
          <div className="Notifications">
            <button style={{"aria-label": "Close"}} onClick={console.log('Close button has been clicked')}>x</button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" value="" html={Utils.getLatestNotification()} />
            </ul>
          </div>
        )
      : ( <div></div> )
      }
    </React.Fragment>
  );
}

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
