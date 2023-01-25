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
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="Email"/>
                <label htmlFor="Password"> Password: </label>
                <input type="password" id="Password" name="Password"/>
                <button>Ok</button>
            </div>
            <div className="linea"></div>
            <footer className="App-footer">
                <p>Copyright {year} - {getFooter}</p>
            </footer>
        </div>
    );
}
  