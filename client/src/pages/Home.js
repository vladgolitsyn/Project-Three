import React from "react";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";
import SearchField from "../components/SearchField";

function Home() {
  return (
    <div>
      <SimpleSlider></SimpleSlider>

      <h1 
        style={{
          marginTop: '50px', 
          fontSize: '35px', 
          fontWeight: '300', 
          textAlign: 'center'
          }}
      >
        FIND YOUR FAVOURITE ARTIST
      </h1>
      <h2 
        style={{
          marginTop: '2px', 
          fontSize: '35px', 
          fontWeight: '300', 
          textAlign: 'center'
          }}
      >
      MEET YOUR MUSIC SOULMATES
      </h2>

      <SearchField/>
      <Footer />
    </div>
  );
}

export default Home;

