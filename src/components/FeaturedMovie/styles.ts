import styled from 'styled-components';
import media from 'styled-media-query';

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
    width: 560px;
    font-size: 26px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > span {
    font-size: 23px;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 20px;
  }

  ${media.lessThan('medium')`
    padding: 0 0 150px 20px;

    h1 {
      font-size: 32px;
      margin-bottom: 12px;
    }

    p {
      width: 100%;
      font-size: 18px;
      margin-bottom: 6px;
    }

    > span {
      font-size: 18px;
      margin-bottom: 10px;
    }
  `};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 25px;

    & + span {
      margin-left: 20px;
    }

    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.green};
      font-weight: 700;
    }
  }

  ${media.lessThan('medium')`
    margin-bottom: 8px;

    span {
      font-size: 18px;

      & + span {
        margin-left: 10px;
      }
    }
  `};
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
  ${media.lessThan('medium')`
    a {
      padding: 8px 20px;
      font-size: 16px;

      svg {
        width: 15px;
        height: 15px;
      }
    }
  `};
`;

export const MovieButtonPlay = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
  margin-right: 0.8rem;
`;

export const MovieButtonMoreAbout = styled.a`
  background: rgba(109, 109, 110, 0.7);
`;
