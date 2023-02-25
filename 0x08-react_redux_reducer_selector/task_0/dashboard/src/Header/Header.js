import React, { cloneElement } from "react";
import { css, StyleSheet } from 'aphrodite';
import holberton_logo from "../assets/holberton_logo.jpg";
import { AppContext } from '../App/AppContext'


const styles = StyleSheet.create({
  header: {
    display: "flex",
    color: '#e14852',
    alignItems: "center"
  },
  headerLogo: {
    width: '200px',
    height: '200px'
  },
  span: {
    fontStyle: 'italic',
    textDecoration: 'underline black'
  },
  welcomeParagraph: {
    marginLeft: '15px',
    color: 'black',
    fontSize: '1.3rem'
  },
  welcomeParagraphSmall: {
    '@media (max-width: 900px)': {
      fontSize: '1.1rem',
      marginLeft: '10px'
    }
  }
})

export default class Header extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {

    const { user, logOut } = this.context

    return (
      <header className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerLogo)} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <p id='logoutSection' className={css(styles.welcomeParagraph, styles.welcomeParagraphSmall)}>Welcome <b>{`${user.email} `}</b><span onClick={logOut} className={css(styles.span)}>(logout)</span></p>
        )}

      </header>

    );
  }
}

Header.contextType = AppContext;