import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => (
    <div className='bodySectionWithMargin'>
        <BodySection {...props}/>
    </div>
)

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.node
}

export default BodySectionWithMarginBottom;
