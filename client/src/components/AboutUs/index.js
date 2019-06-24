import React from "react";
import { Header, Grid, GridColumn } from "semantic-ui-react";
import "./style.css";

const DividerExampleVertical = () => (
  
  <div className="container" style={{width: '60%'}}>
    <Header as='h1'>
      SOUNDBUDZ IS FOR PEOPLE WHO REALLY LOVE LIVE MUSIC
    </Header>

    <p className="about-paragraph">
      You won't always have the same music interest as a friend. Sometimes you'll need 
      to find others who share your passion for an artist and who you can go to a live event with. 
    </p>
    <p className="about-paragraph">
      SoundBudz does exactly that. It connects you with like minded people so you get to talk about 
      the artist you love and together, see them play. 
    </p>
    <br/>
    <br/>
    <Header as='h1' style={{textAlign:'center'}}>MEET THE TEAM</Header>
    <p className="about-paragraph">
    SoundBudz was founded in 2019 by a group of music lovers, in a small classroom at Columbia University, in New
    York City.
    </p>
  </div>
);

export default DividerExampleVertical;

