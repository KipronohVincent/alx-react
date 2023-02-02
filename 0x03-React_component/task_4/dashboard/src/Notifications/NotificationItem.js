import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItems extends React.Component {
  render () {
    if (this.props.html) {
      return (
        <li data-notification-type={this.props.type}
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          onClick={this.props.markAsRead(this.props.id)}></li>
      );
    }
    return (
      <li data-notification-type={this.props.type}
        onClick={this.props.markAsRead(this.props.id)}>{this.props.value}
      </li>
    );
    }
  }

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

NotificationItems.default = {
  type: 'default',
  markAsRead: 0
}

export default NotificationItems;
