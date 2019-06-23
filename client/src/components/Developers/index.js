import React from "react";
import { Container, Grid, Image, Header, Icon, Card } from "semantic-ui-react";
import mike from "../../images/mike.png";
import vlad from "../../images/Vlad.png";
import somat from "../../images/somat4.jpg";
import Shewah from "../../images/szewah.png";
import aman from "../../images/aman5.jpg";

import "./style.css";

const Developers = () => (

  <Container className="card-container">
    
    <Grid centered columns={2}>

      <Grid.Row centered columns={3} textAlign="center">
        <Grid.Column>
          <Image src={mike} />
          <Header as='h3'>Mike</Header>
          <p className="title">Web Developer</p>       
        </Grid.Column>
        <Grid.Column>
          <Image src={vlad} />
          <Header as='h3'>Vlad</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={Shewah}/>
          <Header as='h3'>Somat</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3} textAlign="center">
        <Grid.Column>
          <Image src={somat}/>
          <Header as='h3'>Somat</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={aman}/>
          <Header as='h3'>Aman</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
  </Container>
);

export default Developers;


