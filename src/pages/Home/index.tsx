/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { stringify } from 'querystring';
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
  // const [featuredMovie, setFeaturedMovie] = useState(null);
  const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  const apiRoutes: { name: string; route: string }[] = [
    { name: 'Originais do Netflix', route: '/discover/tv/?with_network=213&' },
    { name: 'Recomendados para Você', route: '/trending/all/week?' },
    { name: 'Em Alta', route: '/movie/top_rated?&' },
    { name: 'Ação', route: '/discover/movie?with_genres=28&' },
    { name: 'Comédia', route: '/discover/movie?with_genres=35&' },
    { name: 'Terror', route: '/discover/movie?with_genres=27&' },
    { name: 'Romance', route: '/discover/movie?with_genres=10749&' },
    { name: 'Documentários', route: '/discover/movie?with_genres=99&' },
  ];

  useEffect(() => {
    const URL_LANGUAGE_AND_KEY = `language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;

    const urls = apiRoutes.map(({ route }) =>
      api.get(route.concat(URL_LANGUAGE_AND_KEY)),
    );

    axios
      .all(urls)
      .then(
        axios.spread((...responses) => {
          const responsesApi = responses.map((response, index) => ({
            id: index,
            name: apiRoutes[index].name,
            movies: response.data.results,
          }));
          console.log(`sadhjahsdkhajd`);
          setSectionsMovies(responsesApi);
          // Mostrando efeito de loading
          // setTimeout(() => setLoading(false), 1000);
        }),
      )
      .catch(errors => {
        console.log(errors);
      });
  }, [apiRoutes]);

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
          <FeaturedMovie />
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
