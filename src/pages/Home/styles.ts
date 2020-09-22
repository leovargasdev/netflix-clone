import styled from 'styled-components';

export const Container = styled.main`
  padding-bottom: 20px;
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    width: 200px;
    height: 200px;
    position: relative;

    span {
      position: absolute;
      top: 100px;
      left: 100px;
      transform: translate(-50%, -50%);

      background: transparent;
      border-top: 2px solid transparent;
      border-left: 2px solid ${({ theme }) => theme.colors.red};
      border-bottom: 2px solid transparent;
      border-right: 2px solid transparent;
      border-radius: 50%;

      width: inherit;
      height: inherit;

      transform-origin: center center;
      animation: rotation 1s linear infinite;
    }

    strong {
      color: ${({ theme }) => theme.colors.red};
      font-size: 70px;
    }
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
