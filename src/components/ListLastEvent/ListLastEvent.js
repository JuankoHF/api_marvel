import { Card, Header, Button, Icon } from "semantic-ui-react";
import Container from "../Container/Container";
import useFetch from '../../hooks/useFetch'
import './ListLastEvent.scss'
import LastEvent from "../LastEvent/LastEvent";
import { useState } from "react";
import Footer from '../footer/Footer'


export default function ListLastEvent() {
    const [totalCards, setTotalCards] = useState(4);
    const lastEventFetch = useFetch('http://gateway.marvel.com/v1/public/events?ts=1&apikey=f141311633d9fb3a108bfb54ec1d73d5&hash=7a4df28f8ad9b0ec4a811a5c69eec069');


    const loadMoreComics = () => {
        const numberComics = totalCards;
        setTotalCards(numberComics + 4);
    };    

    return(
        <div className="continer_last_event">
            <Header size="large">Ultimos eventos</Header>

            <Container bg='Ligth'>
                <Card.Group itemsPerRow={2}>
                    <LastEvent lastEventFetch={lastEventFetch} totalCards = {totalCards} setTotalCards={setTotalCards}/>
                    <div className="container-button">
                        <Button className="color_series" onClick={() => loadMoreComics()}>
                        <Icon name="plus" />
                        Cargar más eventos
                        </Button>
                    </div>
                </Card.Group>
                <Footer />
            </Container>
            
        </div>
    );
}