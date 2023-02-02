import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItems(props) {
  if (props.html) {
    return (
      <li data-notification-type={props.type} dangerouslySetInnerHTML={{ __html: props.html }}></li>
    );
  }
  return (
    <li data-notification-type={props.type}>{props.value}</li>
  )
}

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}

NotificationItems.defaultProps = {
  type: 'default'
}

export default NotificationItems;
