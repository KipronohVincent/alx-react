import React from 'react';
import PropTypes from 'prop-types';

const BodySection = (props) => (
  <div className="bodySection">
    <h2>{props.title}</h2>
    {props.children}
  </div>
)

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default BodySection;
