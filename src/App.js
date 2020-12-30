import logo from "./assets/svg/logo-2.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/variables.scss";
import { Switch, Route, Link } from "react-router-dom";
import FullPageWrapper from "./FullPageWrapper";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  console.log(location.hash);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <div className="App">
      {isLoading && (
        <div className="loader">
          <div className="loader__Logo">
            <p>J</p>
            <img src={logo} className="loader__Logo--App-logo" alt="logo" />
            <p>K</p>
          </div>
        </div>
      )}
      <header className="App-header">
        <Link className="Logo">
          <p>J</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>K</p>
        </Link>
        <div className="App-header__main-nav">
          <a href="/#home">
            <p
              style={
                location.hash === "#home"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Home
            </p>
          </a>
          <a href="/#about">
            <p
              style={
                location.hash === "#about"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              About
            </p>
          </a>
          <a href="/#achievements">
            <p
              style={
                location.hash === "#achievements"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Achievements
            </p>
          </a>
          <a href="/#testimony">
            <p
              style={
                location.hash === "#testimony"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Testimony
            </p>
          </a>
          <a href="/#contact">
            <p
              style={
                location.hash === "#contact"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Contact
            </p>
          </a>
        </div>
      </header>
      <div className="scroll-down">
        <p>Scroll down &nbsp; &nbsp; &nbsp; &rarr;</p>
      </div>
      <Switch>
        <Route exact path="/" component={FullPageWrapper} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
