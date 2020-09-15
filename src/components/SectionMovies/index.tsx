import React, { useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

interface SectionMoviesProps {
  name: string;
  route: string;
}

const SectionMovies: React.FC<SectionMoviesProps> = ({ name, route }) => {
  useEffect(() => {
    const api_url = `${route}language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;

    api.get(api_url).then(response => console.log(response.data));
  }, [route]);
  return <h1>{name}</h1>;
};

export default SectionMovies;
