import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import mike from "../../images/mike.png";
import vlad from "../../images/Vlad.png";
import somat from "../../images/somat.jpeg";
import Shewah from "../../images/szewah.png";
import aman from "../../images/aman.jpeg";

import "./style.css";

const Developers = () => (
  <div className="developer">
    <Grid columns={5} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src={mike} />
          <Header as="h3">Mike</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={vlad} />
          <Header as="h3">Vlad</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={Shewah} /> <Header as="h3">Shewah</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={somat} /> <Header as="h3">Somat</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={aman} /> <Header as="h3">Aman</Header>
          <Header as="h6">Web Developer</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Developers;
