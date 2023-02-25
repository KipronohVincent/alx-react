import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from "../BodySection/BodySection";
import { user, logOut, AppContext } from "./AppContext";


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

// const listNotifications = [
//   {id: 1, type: 'default', value: 'New course available'},
//   {id: 2, type: 'urgent', value: 'New resume available'},
//   {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
// ]

const styles = StyleSheet.create({
  app: {
    borderBottom: "3px solid #e14852",
    width: "100%"
  },
  bodySmall: {
    marginBottom: '150px',
    textAlign: 'left',
    display: 'flex',
    flexWrap: 'wrap'
  },
  footer: {
    borderTop: "3px solid #e14852",
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: '1.2rem',
    width: "100%"
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this)
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.logOut = this.logOut.bind(this)
    this.logIn = this.logIn.bind(this)
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this)
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress)
  }

  handlePress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut()
    }
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }  

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut() {
    this.setState({
      user
    })
  }

  markNotificationAsRead(id) {
    const newNotification = this.state.listNotifications.filter((not) => {
      not.id !== id})
    this.setState({
      listNotifications: newNotification
    })
  }

  render () {
    const { displayDrawer, listNotifications } = this.state
    return(  
    <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
      <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} 
        handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} 
        markNotificationAsRead={this.markNotificationAsRead}
        />
      
      <div className={css(styles.app)}>
        <Header />
      </div>
      
      <div className={css(styles.body, styles.bodySmall)}>

        {!this.state.user.isLoggedIn ? 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.logIn} /> 
          </BodySectionWithMarginBottom> : 
          
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        }

        <BodySection title="News from the School">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, temporibus. Totam, quis quo provident magni reprehenderit nulla eaque. A, illo?</p>
        </BodySection>

      </div>

      <div className={css(styles.footer)}>
        <Footer />
      </div>

    </AppContext.Provider>
    );
  }
}


export default App;