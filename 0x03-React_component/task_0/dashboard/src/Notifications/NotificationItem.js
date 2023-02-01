import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type, value, html}) {
    if (html === undefined) {
        return (
            <li data-priority={type}>{value}</li>
        );
    }

    return (
        <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({'__html': PropTypes.string})
};

NotificationItem.defaultProps = {
    type: "default"
};
