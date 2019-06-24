import React from "react";
import { Container, Grid, Image, Header, Card} from "semantic-ui-react";
import mike from "../../images/mike.jpg";
import vlad from "../../images/Vlad.png";
import somat from "../../images/somat4.jpg";
import Shewah from "../../images/szewah.png";
import aman from "../../images/aman5.jpg";

import "./style.css";

const Developers = () => (

  <Container style={{width: '60%'}}>
    
    <Grid centered columns={2}>

      <Grid.Row centered columns={3} textAlign="center">
        <Grid.Column>
          <Image 
            src={mike}
            style={{margin:'auto',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}
            size='medium'
          />
          <Header as='h2' style={{textAlign:'center', marginBottom:'2px'}}>Mike</Header>
          <p className="title">Web Developer</p>       
        </Grid.Column>
        <Grid.Column>
          <Image 
            src={vlad} 
            style={{margin:'auto', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}
            size='medium'
          />
          <Header as='h2' style={{textAlign:'center', marginBottom:'2px'}}>Vlad</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image 
            src={Shewah}
            style={{margin:'auto', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}
            size='medium'
          />
          <Header as='h2' style={{textAlign:'center', marginBottom:'2px'}}>Szewah</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3} textAlign="center">
        <Grid.Column>
          <Image 
            src={somat}
            style={{margin:'auto', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}
            size='medium'
          />
          <Header as='h2' style={{textAlign:'center', marginBottom:'2px'}}>Somat</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
        <Grid.Column>
          <Image 
            src={aman}
            style={{margin:'auto', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}
            size='medium'
          />
          <Header as='h2' style={{textAlign:'center', marginBottom:'2px'}}>Aman</Header>
          <p className="title">Web Developer</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
  </Container>

  
);

export default Developers;


