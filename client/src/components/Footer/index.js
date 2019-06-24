import React from "react";
import "./style.css";
import { Icon, Image } from "semantic-ui-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="spans">
        <Icon name="copyright outline"/>
        <span>SoundBudz 2019</span>
      </div>
      <br/>
      <Icon
        name="github"
        link="https://github.com/vladgolitsyn/Project-Three"
        size="large"
      />

    </footer>
  );
}

export default Footer;

