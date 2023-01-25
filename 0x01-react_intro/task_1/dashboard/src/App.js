import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} alt="logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="linea"></div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
            </div>
            <div className="linea"></div>
            <footer className="App-footer">
                <p>Copyright {year} - {getFooter}</p>
            </footer>
        </div>
    );
}
  