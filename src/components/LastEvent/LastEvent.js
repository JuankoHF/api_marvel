import { Card, Icon, Image, Dimmer, Loader, Button } from 'semantic-ui-react';
import './lastEvent.scss';

export default function LastEvent({lastEventFetch, totalCards, SetTotalCards}) {
  
  const { loading, result } = lastEventFetch;

  if(loading || !result) {
      return (
          <Dimmer active inverted>
              <Loader inverted>Cargando...</Loader>
          </Dimmer>
      );
  }

  const { results } = result.data;
 
  
  var newResult = results.slice(0,totalCards);
  
  return newResult.map((event, index) => (
    <Card key={index} className="last-event">
      <Image
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header className='title_event'>{event.title}</Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {event.stories.available} Comics
          </span>
        </Card.Meta>
        
      </Card.Content>
      <Card.Content extra>
        <Button
          animated
          fluid
          as="a"
          href={event.urls[0].url}
          target="_blank"
          color="black"
        >
          <Button.Content visible>Ver Evento</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  
  ));
  
}