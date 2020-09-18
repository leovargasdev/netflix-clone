import React, { useCallback, useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import api from '../../services/api';
import {
  Container,
  ContentMovies,
  Movie,
  ButtonLetf,
  ButtonRight,
} from './styles';

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
  const [marginContent, setMarginContent] = useState(0);
  // let MAX_WIDTH_CONTENT: number;

  useEffect(() => {
    const api_url = `${route}language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;

    api.get(api_url).then(response => {
      // MAX_WIDTH_CONTENT = response.data.results.length * 150;
      setMovies(response.data.results);
    });
  }, [route]);

  const handleScrollMovies = useCallback(direction => {
    setMarginContent(stateMargin => {
      // const error = stateMargin - 300 === MAX_WIDTH_CONTENT;
      // console.log(error);
      // if (!error) {
      if (direction === 'left' && stateMargin - 300) return stateMargin - 300;
      return stateMargin + 300;
      // }
      // return stateMargin;
    });
  }, []);

  return (
    <Container>
      <h1>{name}</h1>

      <ButtonLetf type="button" onClick={() => handleScrollMovies('right')}>
        <FaAngleLeft />
      </ButtonLetf>

      <ContentMovies style={{ marginLeft: marginContent }}>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`Capa do filme/seriado ${movie.name}`}
            />
          </Movie>
        ))}
      </ContentMovies>

      <ButtonRight type="button" onClick={() => handleScrollMovies('left')}>
        <FaAngleRight />
      </ButtonRight>
    </Container>
  );
};

export default SectionMovies;
