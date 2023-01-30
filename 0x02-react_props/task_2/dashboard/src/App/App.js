import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <React.Fragment>
            <Notifications />
            <Header />
            <Login />
            <Footer />
        </React.Fragment>
    );
}

  