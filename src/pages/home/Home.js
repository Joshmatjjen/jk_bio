import React from "react";
import "./Home.scss";
import HomeImage from "../../assets/img/homeImage.png";
import Typist from "react-typist";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div className="section">
      <div className="home">
        {/* Left Section */}
        <section className="home__section-left">
          <div className="home__section-left--social">
            <></>
            <div className="home__section-left--social--content">
              <a
                href="https://www.instagram.com/cre8tive_tech/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/cre8tivetech"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/wavedownloader"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="home__section-left--intro">
            <div className="home__section-left--intro__top">
              <div></div>
              <p>HELLO</p>
            </div>
            {/* <Typist.Delay ms={500} /> */}
            {location.hash === "#home" ? (
              <>
                <Typist>
                  <h1>
                    I'm <span>Joshua</span> Kayode
                  </h1>
                </Typist>
                <Typist>
                  <Typist.Delay ms={2000} />
                  <p className="brief">
                    An <span>Innovative Entrepreneur</span>, using the skills
                    and initiative necessary to anticipate needs and bring good
                    new ideas to market
                  </p>
                </Typist>
              </>
            ) : (
              <>
                <h1>
                  I'm <span>Joshua</span> Kayode
                </h1>

                <p className="brief">
                  An <span>Innovative Entrepreneur</span>, using the skills and
                  initiative necessary to anticipate needs and bring good new
                  ideas to market
                </p>
              </>
            )}
          </div>
        </section>

        {/* Right Section */}
        <section className="home__section-right">
          <img src={HomeImage} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Home;
