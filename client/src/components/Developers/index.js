import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import "./style.css";

const Developers = () => (
  <div className="developer">
    <Grid columns={5} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src="../../images/mike.png" />
          <Header as="h3">Mike</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <Header as="h3">Vlad</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <Header as="h3">Shewah</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <Header as="h3">Somat</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <Header as="h3">Aman</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Developers;
