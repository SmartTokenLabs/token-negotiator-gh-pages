import './App.css';
import List from "./pages/List";
import Details from "./pages/Details";
import {Routes, Route, Link} from "react-router-dom";
import examples from './examples';

function App() {

    const menuItems = Object.keys(examples).map((d, idx) => <li key={d}>
        <a href={examples[d].demoUrl}>
            {examples[d].name}
        </a>
    </li>);

  return (
    <div className="App">
        <header className="App-header">
        <div className="pageWrapper headerContainer">
            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        <div className="logoContainer">
                            <Link to="/">
                                <img src="images/logos-token-script.svg" className="App-logo" alt="TokenScript logo" />
                            </Link>
                        </div>
                        <input className="checkbox" type="checkbox" name="" id=""/>
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>

                        <div className="menu-items">
                            <div className="menu-items-inner">
                                <li>
                                    <a href="https://tokenscript.org" target="_blank" rel="noreferrer">
                                        Visit TokenScript Website
                                    </a>
                                </li>
                                {menuItems}
                            </div>
                        </div>
                        <a id="desktop-link" href="https://tokenscript.org" target="_blank" rel="noreferrer">
                            <button className="button">Visit TokenScript Website</button>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        </header>
        <Routes>
            <Route index path="/" element={ <List/> } />
            <Route path={"/details/:id"} element={ <Details/> } />
        </Routes>
        <footer className="App-footer">
            <div className="pageWrapper footerContainer">
                <div className="footerItem">
                    <a href="mailto:sayhi@smarttokenlabs">
                        <img src="images/icons-email.svg" alt="Email icon" />
                    </a>
                    <h3>sayhi@smarttokenlabs</h3>
                </div>
                <div className="footerItem">
                    <div>
                        <a href="https://twitter.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="images/icons-twitter.svg" alt="Twitter icon" />
                        </a>
                        <a href="https://github.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="images/icons-github.svg" alt="Github icon" />
                        </a>
                        <a href="https://linkedin.com/company/smart-token-labs" target="_blank" rel="noreferrer">
                            <img src="images/icons-linkedin.svg" alt="LinkedIn icon" />
                        </a>
                    </div>
                    <h3>Follow TokenScript on</h3>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
