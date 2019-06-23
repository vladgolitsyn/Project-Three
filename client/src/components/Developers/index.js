import React from "react";
import { Container, Grid, Image, Header} from "semantic-ui-react";
import mike from "../../images/mike.jpg";
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
          <p className='h3'>Mike</p>
          <p className="title">Web Developer</p>       
        </Grid.Column>
        <Grid.Column>
          <Image src={vlad} />
          <p className='h3'>Vlad</p>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={Shewah}/>
          <p className='h3'>Szewah</p>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3} textAlign="center">
        <Grid.Column>
          <Image src={somat}/>
          <p className='h3'>Somat</p>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={aman}/>
          <p className='h3'>Aman</p>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
  </Container>
);

export default Developers;


