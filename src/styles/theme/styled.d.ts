import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      secondary: string;
      tertiary: string;

      red: string;
      green: string;
      blue: string;
      yellow: string;

      body: string;
    };
  }
}
