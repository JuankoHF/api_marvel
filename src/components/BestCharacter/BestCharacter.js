import {Header, Button, Grid, Image} from 'semantic-ui-react';
import Container from '../Container/Container';
import marvelImage from "../../img/marvel.png";
import { Link } from 'react-router-dom';

import "./BestCharacter.scss";

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              Los mejores personajes de Marvel. 
              Toda la gama de super poderes y habilidades.
            </Header>
            <Header as="h3">Disfruta del mejor contenido.</Header>
            <Button  as={Link} to={'/characters'} className='buton_link' >
               Ver mas personajes
            </Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel APP" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}