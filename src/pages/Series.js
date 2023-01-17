import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries/ListSeries";
import useFetch from "../hooks/useFetch";
import './Styles/Series.scss';


export default function Series() {
  const listSeries = useFetch(
    'http://gateway.marvel.com/v1/public/series?ts=1&apikey=f141311633d9fb3a108bfb54ec1d73d5&hash=7a4df28f8ad9b0ec4a811a5c69eec069'
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid className="cont_gridColumn">
          <Grid.Column className="grid_cont_series">
            <Container bg="light">
              <Header as="h2">últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}