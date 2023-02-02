import React from 'react';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          { !this.props.isLoggedIn ? <Login /> : <CourseList /> }
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
