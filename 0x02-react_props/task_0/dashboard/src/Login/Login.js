import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Login.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="Email"/>
                <label htmlFor="Password"> Password: </label>
                <input type="password" id="Password" name="Password"/>
                <button>Ok</button>
            </div>
            <div className="linea"></div>
        </div>
    );
}
  
