import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import close from './close-icon.png'

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

export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={styles} arial-label="Close" onClick={printOnClick}>
                <img src={close} alt="Close" width="10px"/>
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: notification}}></li>
            </ul>
        </div>
    );
}