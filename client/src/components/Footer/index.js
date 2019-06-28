import React from "react";
import "./style.css";
import { Icon} from "semantic-ui-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="spans">
        <Icon name="copyright outline" />
        <span>SoundBudz 2019</span>
      </div>
      <br />
      <a href="https://github.com/vladgolitsyn/Project-Three">
        <Icon name="github" size="large" style={{ color: "white" }} />
      </a>
    </footer>
  );
}

export default Footer;
