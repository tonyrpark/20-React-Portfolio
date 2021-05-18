import React from "react";
import GitHub from "./assets/images/githubSquare.png";
import linkedIn from "./assets/images/linkedIn.png";
import stackoverflow from "./assets/images/stackoverflow.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Contact = () => {
  return (
    <form id="contact-form">
      <ul>
        <li>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Smith"
            required="required"
          />
        </li>
        <li>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required="required"
          />
        </li>
        <li>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            required="required"
            placeholder="Hi Tony, I wanted to inquire about..."
          ></textarea>
        </li>
      </ul>
      <input type="submit" />
    </form>
  );
};

export default Contact;
