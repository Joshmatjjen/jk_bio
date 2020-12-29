import React from "react";
import "./Achievement.scss";
import HomeImage from "../../assets/img/homeImage1.png";

const Achievement = () => {
  return (
    <div className="section">
      <div className="achievement">
        {/* Title & Sub */}
        <section className="achievement__top">
          <h1>Achievements</h1>
          <p>Explore all my great achievements</p>
        </section>
        <section className="achievement__content">
          {/* Edu Section */}
          <section className="achievement__content--edu">
            <div className="achievement__content--edu--title">
              <i class="fad fa-book-reader"></i>
              <p>Education</p>
            </div>
            <div className="achievement__content--edu--list">
              <div className="achievement__content--edu--list___box">
                <p></p>
                <h3></h3>
                <p></p>
                <p></p>
              </div>
            </div>
          </section>

          {/* Exp Section */}
          <section className="achievement__content--exp">
            <div className="achievement__content--exp--title">
              <i class="fad fa-briefcase"></i>
              <p>Experience</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Achievement;
