import React from "react";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";
import { Header } from "semantic-ui-react";
import SearchField from "../components/SearchField";

function Home() {
  return (
    <div>
      <SimpleSlider></SimpleSlider>
      <h1 className="homepage-header-h3">FIND YOUR FAVOURITE ARTIST</h1>
      <h2 className="homepage-header-h2">MEET YOUR MUSIC SOULMATES</h2>
      <SearchField/>
      <Footer />
    </div>
  );
}

export default Home;

