import * as React from "react";

import Global from './global';
import {CSSProperties} from "react";

interface ThemePalette {
  primaryColor: string;
  secondaryColor: string;
  background: string;
}

type ThemeTypographyStyle = Required<
Pick<CSSProperties, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color'>
> &
Partial<Pick<CSSProperties, 'letterSpacing' | 'lineHeight' | 'textTransform' | 'fontStyle' | 'fontVariant'>>;

interface ThemeTypography {
  fontFamily: CSSProperties["fontFamily"];
  fontSize: CSSProperties["fontSize"];

  hero: ThemeTypographyStyle;
  h1: ThemeTypographyStyle;
  h2: ThemeTypographyStyle;
  h3: ThemeTypographyStyle;
  h4: ThemeTypographyStyle;
  h5: ThemeTypographyStyle;
  h6: ThemeTypographyStyle;
  button: ThemeTypographyStyle;
  link: ThemeTypographyStyle;
  body: ThemeTypographyStyle;
  caption: ThemeTypographyStyle;
  label: ThemeTypographyStyle;
  code: ThemeTypographyStyle;
}

export interface Theme {
  palette: ThemePalette;
  typography: ThemeTypography;
}

export const createTheme = (): Theme => {
  return {
    palette: {
      primaryColor: '#005AE5',
      secondaryColor: '#222222',
      background: 'white'
    },
    typography: {
      fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
      fontSize: 14,
      hero: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '8rem',
        fontWeight: 700,
        lineHeight: 0.75
      },
      h1: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '3.75rem',
        fontWeight: 700,
        lineHeight: 1
      },
      h2: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.04
      },
      h3: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '2.125rem',
        fontWeight: 700,
        lineHeight: 1.17
      },
      h4: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.33
      },
      h5: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.6
      },
      h6: {
        color: "black",
        fontFamily: "\"Avenir Next\", \"Segoe UI\", Helvetica, Arial, sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.6
      },
      button: {
        color: "black",
        fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
        fontSize: '0.875rem',
        fontWeight: 500
      },
      link: {
        color: "black",
        fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
        fontSize: '1rem',
        fontWeight: 400
      },
      body: {
        color: "black",
        fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
        fontSize: '0.875rem',
        fontWeight: 400
      },
      caption: {
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
        fontSize: '0.75rem',
        fontWeight: 400
      },
      label: {
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif",
        fontSize: '0.75rem',
        fontWeight: 400
      },
      code: {
        color: "black",
        fontFamily: '"Lucida Console", Monaco, monospace',
        fontSize: '0.75rem',
        fontWeight: 400
      }
    }
  };
};

// In order to have self-supporting components, we rely on default theme when not provided.
Global.__DEFAULT_THEME__ = (Global.__DEFAULT_THEME__ || createTheme()) as Theme;

const defaultTheme = Global.__DEFAULT_THEME__;

const ThemeContext = React.createContext<Theme>(defaultTheme);

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */

interface IThemeProviderViewModel {
  theme: Theme;
}

type ThemeProviderProps = IThemeProviderViewModel;

export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider: React.SFC<ThemeProviderProps> = props => {
  const { children, theme: localTheme } = props;

  return (
    <ThemeConsumer>
      {outerTheme => {
        const theme =
          outerTheme === defaultTheme ? localTheme :  { ...outerTheme, ...localTheme };

        return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
      }}
    </ThemeConsumer>
    );
};

// TODO: create withTheme HOC