import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import { useState } from "react";
import "./ListSeries.scss";
import Footer from '../footer/Footer'

export default function ListSeries({ listSeries }) {
  const { loading, result } = listSeries;
  const [totalCards, setTotalCards] = useState(4);

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando series</Loader>
      </Dimmer>
    );
  }
  const { results } = result.data;

  var newResult = results.slice(0,totalCards);
  
  const loadMoreComics = () => {
    const numberComics = totalCards;
    setTotalCards(numberComics + 4);
  };

  return (
    <Card.Group itemsPerRow={2}>
      {newResult.map((res, index) => (
        <Card key={index} className="list-series">
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            wrapped
            alt={res.title}
            ui={false}
          />
          <Card.Content>
            <Card.Header className="series_title" >{res.title}</Card.Header>
            <Card.Meta>
              <span>
                <Icon name="users" /> {res.creators.available}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>
                <Icon name="rebel" /> {res.id}
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
      <div className="container-button">
        <Button className="color_series" onClick={() => loadMoreComics()}>
        <Icon name="plus" />
        Cargar más  series
        </Button>
      </div>
      <Footer />
    </Card.Group>
    
  );
}
