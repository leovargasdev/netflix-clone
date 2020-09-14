import React, { useEffect } from 'react';
import api from '../../services/api';

const Home: React.FC = () => {
  useEffect(() => {
    api
      .get(
        `/discover/tv/?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`,
      )
      .then(response => console.log(response));
  }, []);

  return <h1>aaaa</h1>;
};

export default Home;
