import React, { useState, useEffect } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import api from '../../services/api';
import {
  Container,
  MovieBackground,
  Content,
  MovieInfo,
  MovieButtons,
  MovieButtonPlay,
  MovieButtonMoreAbout,
} from './styles';

interface MovieProps {
  id: string;
  name: string;
  imageUrl: string;
  rating: string;
  releaseDate: string;
  seasons?: string;
  runtime?: string;
  overview: string;
  genres: string;
}

const FeaturedMovie: React.FC<{ movieId: number }> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);

  useEffect(() => {
    api
      .get(
        `/tv/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`,
      )
      .then(response => {
        const { data } = response;
        const seasons = `${data.number_of_seasons} Temporada${
          data.number_of_seasons > 1 ? 's' : ''
        }`;
        const rating = data.vote_average.toString();

        const ratingFormatted = rating.includes('.')
          ? rating.replace('.', '')
          : rating.concat('0');

        setMovie({
          id: data.id,
          name: data.original_name,
          imageUrl: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
          rating: ratingFormatted,
          releaseDate: data.first_air_date.toString().split('-')[0],
          seasons,
          overview: data.overview,
          genres: data.genres.map((genre: any) => genre.name).join(', '),
        });
      });
  }, [movieId]);

  return (
    <Container>
      {movie.id && (
        <MovieBackground image={movie.imageUrl}>
          <div>
            <Content>
              <h1>{movie.name}</h1>
              <MovieInfo>
                <span>{movie.rating}% relevante</span>
                <span>{movie.releaseDate}</span>
                <span>{movie.seasons || movie.runtime}</span>
              </MovieInfo>
              <p>{movie.overview}</p>
              <span>
                <strong>Gêneros:</strong> {movie.genres}
              </span>
              <MovieButtons>
                <MovieButtonPlay href="/">
                  <FaPlay /> Assistir
                </MovieButtonPlay>
                <MovieButtonMoreAbout href="/">
                  <FaInfoCircle /> Mais informações
                </MovieButtonMoreAbout>
              </MovieButtons>
            </Content>
          </div>
        </MovieBackground>
      )}
    </Container>
  );
};

export default FeaturedMovie;
