import styled from 'styled-components';
import media from 'styled-media-query';

interface ContainerProps {
  isBlack: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 10;
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  background: ${({ theme, isBlack }) =>
    isBlack
      ? theme.colors.body
      : 'linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 40%, transparent)'};

  transition: background 0.8s;

  ${media.lessThan('medium')`
    padding: 20px 10px;
  `}
`;

export const RoutesMenu = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 70px;
    margin-right: 15px;
    filter: saturate(1.4);


  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 400;

      & + li {
        margin-left: 30px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
  ${media.lessThan('medium')`
    ul {
      display: none;
    }
  `}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 27px;
    height: 27px;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 30px;
  }

  input {
    background-color: black;
    color: white;
    margin: 10px 20px;
    padding: 6px;
    border: 0px;
    border-radius: 4px;
    opacity: 0.45;
    width: 250px;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    outline: none;
    border: 0;

    img {
      width: auto;
      height: 40px;
      border-radius: 6px;
      margin-right: 3px;
    }

    > svg {
      width: 15px;
      height: 15px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${media.lessThan('medium')`
    > svg {
      width: 20px;
      height: 20px;
      margin-right: 24px;
    }
    button {
      margin-right: 18px;
    }
  `}
`;
