import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 6px 40px;
  position: fixed;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 40%, transparent);
`;

export const RoutesMenu = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 30px;
    margin-right: 15px;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 400;

      & + li {
        margin-left: 20px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 30px;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    outline: none;
    border: 0;

    img {
      width: auto;
      height: 30px;
      border-radius: 6px;
      margin-right: 3px;
    }

    > svg {
      width: 15px;
      height: 15px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
