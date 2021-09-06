import { useState, useEffect } from 'react';
import { Container, Dimmer, Loader, Header } from 'semantic-ui-react';
import { API_URL } from './constants';
import { Repository } from './types';
import HomePage from './components/HomePage';
import './App.scss';

function App() {
  const [data, setData] = useState<null | Repository[]>(null);

  useEffect(() => {
    // TODO: handle errors
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data);
      });
  }, []);

  return (
    <Container className="App">
      <Header as='h1'>Repositories Table</Header>
      {data 
        ? <HomePage data={data} /> 
        : <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>}

    </Container>
  );
}

export default App;
