import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 0;

  position: relative;
  /* Corta o conteúdo quando ele estourar as bordas do componente */
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    z-index: 7;
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    z-index: 5;
    background: rgba(20, 20, 20, 0.8);
    border: 0;

    svg {
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.colors.primary};
    }

    visibility: hidden;

    &:hover {
      svg {
        width: 45px;
        height: 45px;
      }
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

export const ContentMovies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  transition: margin-left 1s;
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

export const ButtonLetf = styled.button`
  left: 0;
`;

export const ButtonRight = styled.button`
  right: 0;
`;
