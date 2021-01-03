import logo from "./assets/svg/logo-2.svg";
import "./App.scss";
import "./Header.scss";
import "./themes/mixins.scss";
import "./themes/variables.scss";
import { Switch, Route } from "react-router-dom";
import FullPageWrapper from "./FullPageWrapper";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./component/Header";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  console.log(location.hash);
  useEffect(() => {
    document.documentElement.webkitRequestFullscreen();
    window.scrollTo(0, 1);
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
      <Header />
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
