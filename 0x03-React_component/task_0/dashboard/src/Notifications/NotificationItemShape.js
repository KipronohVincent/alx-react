import PropTypes from 'prop-types';

NotificationItemShape.PropTypes = {
    CourseShape: PropTypes.shape({
        id: PropTypes.number.isRequired,
        html: PropTypes.shape({__html: ProtTypes.string.isRequired}),
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
    })
};

export default NotificationItemShape;