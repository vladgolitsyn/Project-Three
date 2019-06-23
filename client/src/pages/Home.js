
import React from "react";
import Footer from "../components/Footer";
// import SearchForm from "../components/searchField";
// import pic from "../images/005.jpg";
import SimpleSlider from "../components/SimpleSlider";
import { Header } from "semantic-ui-react";
import SearchField from "../components/SearchField";

function Home() {
  return (
    <div>
      <SimpleSlider></SimpleSlider>
      <Header className="header-h3" as="h3">FIND YOUR SOUND BUDDIES NOW</Header>
      <SearchField/>
      <Footer />
    </div>
  );
}

export default Home;

