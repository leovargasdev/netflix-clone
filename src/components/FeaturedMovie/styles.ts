import styled from 'styled-components';

interface MovieBackgroundProps {
  image: string;
}

export const Container = styled.div`
  flex: 1;
`;

export const MovieBackground = styled.div<MovieBackgroundProps>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 100vh;

  > div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 0 200px 40px;

  width: inherit;
  height: inherit;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 40%,
    transparent 60%
  );

  h1 {
    font-size: 60px;
    margin-bottom: 30px;
  }

  p {
    width: 30%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;
  }

  > span {
    font-size: 23px;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 20px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 25px;

    & + span {
      margin-left: 15px;
    }
  }
`;

export const MovieButtons = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 11px 28px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 24px;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 0.8rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MovieButtonPlay = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
  margin-right: 0.8rem;
`;

export const MovieButtonMoreAbout = styled.a`
  background: rgba(109, 109, 110, 0.7);
`;
