/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SectionMovies from '../../components/SectionMovies';

interface SectionsMoviesProps {
  name: string;
  route: string;
}

const Home: React.FC = () => {
  const sectionsMovies: SectionsMoviesProps[] = [
    { name: 'Originais do Netflix', route: '/discover/tv/?with_network=213&' },
    { name: 'Recomendados para Você', route: '/trending/all/week?' },
    { name: 'Em Alta', route: '/movie/top_rated?&' },
    { name: 'Ação', route: '/discover/movie?with_genres=28&' },
    { name: 'Comédia', route: '/discover/movie?with_genres=35&' },
    { name: 'Terror', route: '/discover/movie?with_genres=27&' },
    { name: 'Romance', route: '/discover/movie?with_genres=10749&' },
    { name: 'Documentários', route: '/discover/movie?with_genres=99&' },
  ];

  return (
    <div>
      {sectionsMovies.map((sectionMovie, index) => (
        <SectionMovies {...sectionMovie} key={index.toString()} />
      ))}
    </div>
  );
};

export default Home;
