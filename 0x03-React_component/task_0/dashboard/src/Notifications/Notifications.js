import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const styles = { 
        position: 'relative',
        left: '1175px',
        bottom: '70px',
        border: 'none',
        background: 'transparent'
};

function printOnClick() {
    console.log('Close button has been clicked');
}

const notification = getLatestNotification();

const style = {
    position: "absolute",
    right: "1px",
    "margin-right": "20px",
}

export default function Notifications({displayDrawer, listNotifications}) {
    return (
        <div style={style}>
            <div className="menuItem">
                Your notifications
            </div>
        {displayDrawer && (
            <div className="Notifications">
                {listNotifications.length ? (
                <React.Fragment>
                    <p>Here is the list of notifications</p>
                    <button style={styles} arial-label="Close" onClick={printOnClick}>
                        <img src={close} alt="Close" width="10px"/>
                    </button>
                    <ul>
                        {listNotifications.map(({id, type, value, html}) => (
                            <NotificationItem key={id} type={type} value={value} html={html}/>
                        ))}
                    </ul>
                </React.Fragment>
                ) : (<p>No new notifications for now</p>)}
            </div>
        )}
        </div>
    );
}

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}
