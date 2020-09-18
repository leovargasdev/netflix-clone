import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;

  padding: 100px 0 0 100px;
  width: 100%;
  height: 100vh;

  span {
    margin: auto;
    transform: translate(-50%, -50%);

    background: transparent;
    border-top: 4px solid transparent;
    border-left: 4px solid ${({ theme }) => theme.colors.red};
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
    border-radius: 50%;

    width: 200px;
    height: 200px;

    transform-origin: center center;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  /* h1 {
    position: absolute;
    display: flex;
    justify-self: center;
    color: ${({
    theme,
  }) => theme.colors.red};
  } */
`;
