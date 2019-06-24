import React from "react";
import { Grid, Image } from "semantic-ui-react";
import logo from "../../images/logo.png";
import "./style.css";
const DividerExampleVertical = () => (
  <div className="aboutUs">
    <Grid>
      <Grid.Column width={3}>
        <p>
          <Image src={logo} size="large" className="logo" circular />
        </p>
      </Grid.Column>
      <Grid.Column width={13}>
        <p>
          The SoundBudz team was founded in 2019 in a small classroom in New
          York City, NY. Our app is designed for all women and men, who really
          love the live music and want to go to concerts. Its not always you and
          your friend will have a same preference of the music and that yours
          favorite band will be perfoming. So sometimes you might have to find
          out someone else to go with. Thats why this web application will help
          you find the like minded person and enjoy the concert. It will provide
          the user the platform to have a discussion about the show or concert
          you want to attend and know more about the band and the artist.
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default DividerExampleVertical;
