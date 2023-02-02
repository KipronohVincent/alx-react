import React from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import BodySection from './BodySection/BodySection';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.control = false;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 17) this.control = true
    if (event.keyCode === 72 && this.control) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          {
            !this.props.isLoggedIn ? 
              <BodySectionWithMarginBottom title='Log in to continue'><Login /></BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title='Course list'><CourseList /></BodySectionWithMarginBottom>
           }
          <BodySection title='News from the School'>
            <p>Random paragraph here</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}

export default App;
