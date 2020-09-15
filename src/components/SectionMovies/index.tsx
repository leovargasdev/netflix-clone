import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, ContentMovies, Movie } from './styles';

interface SectionMoviesProps {
  name: string;
  route: string;
}

interface MovieProps {
  id: string;
  name: string;
  poster_path: string;
}

const SectionMovies: React.FC<SectionMoviesProps> = ({ name, route }) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const api_url = `${route}language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;

    api.get(api_url).then(response => setMovies(response.data.results));
  }, [route]);

  return (
    <Container>
      <h1>{name}</h1>
      <ContentMovies>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`Capa do filme/seriado ${movie.name}`}
            />
          </Movie>
        ))}
      </ContentMovies>
    </Container>
  );
};

export default SectionMovies;
