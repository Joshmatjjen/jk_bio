import React, { useEffect, useMemo, useState } from "react";
import "./Contact.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = (message) => {
    console.log("Hello logs");
    toast.dark(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [status, setStatus] = useState("");
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  useMemo(() => {
    status === "SUCCESS" && notify("😁 Message submitted successfully");
    status === "ERROR" && notify("😢 Message was not submitted successfully");
  }, [status]);
  return (
    <div className="section">
      <div className="contact">
        {/* Title & Sub */}
        <section className="contact__content">
          {/* Edu Section */}
          <section className="contact__content--text">
            <p>
              Let's make something new, different and more meaningful or make
              thing more visual or Conceptual ? <span>Just Say Hello!</span>
            </p>
            <p>{"-->"}</p>
          </section>
          {/* Exp Section */}
          <form
            className="contact__content--form"
            onSubmit={submitForm}
            action="https://formspree.io/f/mleoozpw"
            method="POST"
          >
            <input type="email" name="email" placeholder="Mail Address" />
            <input type="text" name="message" placeholder="Message" />
            <div>
              {/* <div className="btn" onClick={() => submitForm()}></div> */}
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="footer">
          <p>
            Copyright © {new Date().getFullYear()} Joshua Kayode. All rights
            Reserved.
          </p>
          <p>
            Created by <span>Ĵoshmăt</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
