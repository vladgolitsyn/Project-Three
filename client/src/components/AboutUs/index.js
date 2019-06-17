import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";

const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <Grid.Column>
        <p>
          <Image src="../../images/002.jpg" size="medium" circular />
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          Our app is designed for all women and men, who really love the live
          music and want to go to concerts.Its not always you and your friend
          will have a same preference of the music and the yours favorite band
          perfoming. So sometimes you might have to find out someone else to go
          with. Thats why this web application will help you find the like
          minded person and enjoy the concert. It will provide the user the
          platform to have a discussion about the show or concert you want to
          attend and know more about the band and the artist.
        </p>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default DividerExampleVertical;
