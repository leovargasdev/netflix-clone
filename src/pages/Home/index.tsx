/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar';
import SectionMovies from '../../components/SectionMovies';
import FeaturedMovie from '../../components/FeaturedMovie';

import { Loading } from './styles';
import api from '../../services/api';

interface MovieProps {
  id: string;
  name: string;
  poster_path: string;
}

interface SectionsMoviesProps {
  id: number;
  name: string;
  movies: MovieProps[];
}

const Home: React.FC = () => {
  const [featuredMovieId, setFeaturedMovieId] = useState<number>(0);
  const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  const apiRoutes: { name: string; route: string }[] = [
    { name: 'Em alta', route: '/tv/popular?' },
    { name: 'Populares na Netflix', route: '/trending/all/week?' },
    { name: 'Melhores Avaliados', route: '/movie/top_rated?' },
    { name: 'Lançamentos', route: '/movie/now_playing?' },
    { name: 'Ação', route: '/discover/movie?with_genres=28&' },
    { name: 'Comédia', route: '/discover/movie?with_genres=35&' },
    // { name: 'Romance', route: '/discover/movie?with_genres=10749&' },
    // { name: 'Documentário', route: '/discover/movie?with_genres=99&' },
  ];

  useEffect(() => {
    const URL_LANGUAGE_AND_KEY = `language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}&page=`;

    const urlsAxios = apiRoutes.map(({ route }, index) => {
      let pageRandom = '1';
      // Somente as três primeiras listas são randômicas
      if (index < 3) pageRandom = (Math.random() * (5 - 1) + 1).toString();

      const URL = route.concat(URL_LANGUAGE_AND_KEY).concat(pageRandom);
      return api.get(URL);
    });

    if (sectionsMovies.length === 0) {
      Promise.all([...urlsAxios])
        .then(responses => {
          const responsesApi = responses.map((response, index) => ({
            id: index,
            name: apiRoutes[index].name,
            movies: response.data.results,
          }));

          setSectionsMovies(responsesApi);

          const randamIdMovie = Math.floor(Math.random() * 20);
          setFeaturedMovieId(responsesApi[0].movies[randamIdMovie].id);
          // Criando efeito de loading
          setTimeout(() => setLoading(false), 500);
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  }, [apiRoutes, sectionsMovies]);

  return (
    <main>
      <NavBar />
      {loading ? (
        <Loading>
          <div>
            <span />
            <strong>N</strong>
          </div>
        </Loading>
      ) : (
        <>
          <FeaturedMovie movieId={featuredMovieId} />
          <div style={{ marginTop: -200 }}>
            {sectionsMovies.map(sectionMovie => (
              <SectionMovies {...sectionMovie} key={sectionMovie.id} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
