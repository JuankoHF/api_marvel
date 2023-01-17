import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import Container from '../Container';
import { Header } from 'semantic-ui-react';
import useFetch  from '../../hooks/useFetch';
import './Characters.scss'

export default function Characters() {

    const characters = useFetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f141311633d9fb3a108bfb54ec1d73d5&hash=7a4df28f8ad9b0ec4a811a5c69eec069');

     

  const { loading, result } = characters;

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando Comics</Loader>
      </Dimmer>
    );
  }
  const { results } = result.data;
  console.log(results); 

    return (
        <Container bg="light">
            <Header  className="title" as="h2">todos los personajes</Header>
                    
            <Card.Group itemsPerRow={2}>
                {results.map((res, index) => (
                    
                    <Card key={index} className="list-series">
                        <Image
                            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
                            wrapped
                            alt={res.title}
                            ui={false}
                        />
                        <Card.Content>
                            <Card.Header>{res.name}</Card.Header>
                            <Card.Meta>
                            <span>
                                <Icon name="rebel" /> Interviene en {res.comics.available} comics
                            </span>
                            </Card.Meta>
                            <Card.Meta>
                            <span>
                                <Icon name="rebel" /> Interviene en {res.series.available} series
                            </span>
                            </Card.Meta>
                            
                        </Card.Content>
                        <Card.Content extra>
                            <Button
                            animated
                            fluid
                            as="a"
                            href={res.urls[0].url}
                            target="_blank"
                            color="black"
                            >
                            <Button.Content visible>Más información</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right" />
                            </Button.Content>
                            </Button>
                        </Card.Content>
                    </Card>
                        
                ))}
            </Card.Group>
        </Container>

    );

  
  
}
