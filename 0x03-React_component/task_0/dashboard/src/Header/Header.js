import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} alt="logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="linea"></div>
        </div>
    );
}
  