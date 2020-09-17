import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px 0;
  /* Corta o conteúdo quando ele estourar as bordas do componente */
  overflow-x: hidden;
`;

export const ContentMovies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  width: 10000px;
`;

export const Movie = styled.div`
  width: 200px;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.4s;

    &:hover {
      cursor: pointer;
      transform: scale(1);
    }
  }
`;
