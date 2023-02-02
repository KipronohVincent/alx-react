import React from 'react';
import './Notifications.css';
import * as Utils from '../utils';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className="menuItems">Your notifications</div>
        {this.props.displayDrawer
          ? (
            <div className="Notifications">
              <button style={{"ariaLabel": "Close"}} onClick={console.log('Close button has been clicked')}>x</button>
              <p>Here is the list of notifications</p>
              <ul>
                <NotificationItem markAsRead={this.markAsRead} id='1' type="default" value="New course available" />
                <NotificationItem markAsRead={this.markAsRead} id='2' type="urgent" value="New resume available" />
                <NotificationItem markAsRead={this.markAsRead} id='3' type="urgent" value="" html={Utils.getLatestNotification()} />
              </ul>
            </div>
          )
        : ( <div></div> )
        }
      </React.Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
