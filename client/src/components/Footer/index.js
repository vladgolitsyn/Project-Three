import React from "react";
import "./style.css";
import logo from "../../images/logo.png";
import { Icon, Image } from "semantic-ui-react";

function Footer() {
  return (
    <footer className="footer">
      <Icon name="copyright outline" />
      <span>SoundBudz 2019</span>
      <br />
      <Icon
        name="github"
        link="https://github.com/vladgolitsyn/Project-Three"
        size="large"
      />
    </footer>
  );
}

export default Footer;
