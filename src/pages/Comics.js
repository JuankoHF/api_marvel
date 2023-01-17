import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics/ListComics";
import useFetch from "../hooks/useFetch";
import './Styles/Comics.scss';

export default function Comics() {
  const listComics = useFetch(
    'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f141311633d9fb3a108bfb54ec1d73d5&hash=7a4df28f8ad9b0ec4a811a5c69eec069'
  );

  return (
    <div>
      <div className="comics-page">
        <div id="slide-comics-image" />
          <Grid className="cont_gridColumn">
            <Grid.Column className="grid_cont">
              <Container bg="light">
                <Header as="h2">comics de Marvel</Header>
                <ListComics listComics={listComics} />
              </Container>
            </Grid.Column>
          </Grid>
      </div>
    </div>
  );
}