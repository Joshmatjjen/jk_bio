import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-2.svg";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(window.innerWidth);
  const checkRef = useRef();

  useEffect(() => {
    console.log(menuOpen);
    let elem = document.querySelector(".header");
    if (menuOpen) elem.style.backgroundColor = "var(--color-primary)";
    else elem.style.backgroundColor = "transparent";
  }, [menuOpen]);
  return (
    <>
      {/* DESKTOP */}
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

      {/* MOBILE */}
      <header className="header">
        <Link className="Logo1">
          <p>J</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>K</p>
        </Link>
        <input
          className="menu-btn"
          defaultChecked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
          type="checkbox"
          id="menu-btn"
          ref={checkRef}
        />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a
              href="/#home"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
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
          </li>
          <li>
            <a
              href="/#about"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
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
          </li>
          <li>
            <a
              href="/#achievement"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
              <p
                style={
                  location.hash === "#achievement"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
              >
                Achievement
              </p>
            </a>
          </li>
          <li>
            <a
              href="/#testimony"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
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
          </li>
          <li>
            <a
              href="/#contact"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
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
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
