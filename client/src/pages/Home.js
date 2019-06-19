import React from "react";
import Footer from "../components/Footer";
// import SearchForm from "../components/searchField";
// import pic from "../images/005.jpg";
import SimpleSlider from "../components/SimpleSlider";

import { Divider, Header } from "semantic-ui-react";
import AboutUs from "../components/AboutUs";
import Developers from "../components/Developers";
import SearchField from "../components/SearchField";

function Home() {
  return (
    <div>
      <SimpleSlider />
      <div className="bg">
        <div className="container">
          <SearchField />
        </div>
      </div>

      <br />
      <div className="container">
        <Header as="h1" color="red" fontSize="10px" textAlign="center">
          You are not Alone. We will help you find Friends to attend the show.{" "}
        </Header>
      </div>

      <div className="container">
        <SimpleSlider />
      </div>

      <Divider />
      <br />
      {/* about us section  */}
      <div className="container">
        <Header as="h1" color="violet" textAlign="center">
          About Us
        </Header>
        <AboutUs />
      </div>
      <br />
      <br />
      {/* Developers */}
      <div className="container">
        <Header as="h1" color="violet" textAlign="center">
          Our Developing Team
        </Header>
        <Developers />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
