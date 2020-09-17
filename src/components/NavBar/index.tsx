import React from 'react';
import { FaSearch, FaBell, FaGift, FaCaretDown } from 'react-icons/fa';

import LogoNetflix from '../../assets/logo.png';

import { Container, RoutesMenu, Profile } from './styles';

const NavBar: React.FC = () => (
  <Container>
    <RoutesMenu>
      <img src={LogoNetflix} alt="dahdjahdkja" />
      <ul>
        <li style={{ fontWeight: 'bold' }}>Inicio</li>
        <li>Series</li>
        <li>Filmes</li>
        <li>Mais Recentes</li>
        <li>Minha Lista</li>
      </ul>
    </RoutesMenu>
    <Profile>
      <FaSearch />
      <FaGift />
      <FaBell />
      <button type="button">
        <img
          src="https://occ-0-761-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR8DzEDMx6x6rgkSexM2EYh44oQISc8fyEFr6WnraR9_HyniHFDRbXRrElpLThfL9OYFOueAItK7VIEb2xH7AqA.png?r=c71"
          alt="imagem profile usuario"
        />
        <FaCaretDown />
      </button>
    </Profile>
  </Container>
);

export default NavBar;
