import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../Thema';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';

export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.Nunito};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.background};
  }
  h1,
  h2,
  h3 {
    padding: 0%;
    margin: 0;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xxl};
    line-height: ${theme.lineHeights.heading};
    color: ${theme.colors.black87};
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    line-height: ${theme.lineHeights.body};
    font-size: ${theme.fontSizes.m};
    color: ${theme.colors.black87};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
