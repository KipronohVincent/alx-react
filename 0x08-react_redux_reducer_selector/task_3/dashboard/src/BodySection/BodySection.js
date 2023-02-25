import React from "react";
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
  bodySection: {
    width: '600px',
  },
  sectionMarginSmall: {
    '@media (max-width: 900px)': {
        marginLeft: '10px'
    }
  }
})

class BodySection extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className={css(styles.bodySection, styles.sectionMarginSmall)}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
    title: PropTypes.string
}

BodySection.defaultProps = {
    title: ''
}

export default BodySection;