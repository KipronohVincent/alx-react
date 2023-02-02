import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

function Footer() {
  return (
    <div className="App-footer">
    <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
    </div>
  );
}

export default Footer;
