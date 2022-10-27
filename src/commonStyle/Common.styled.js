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

const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.Nunito};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.black87};
    background-color: ${theme.colors.background};
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
    letter-spacing: 0.07em;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes.ms};
    line-height: ${theme.lineHeights.body};
    color: ${theme.colors.black87};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 360px) and (max-width: 767px) {
    width: 328px;
    padding: 13px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 704px;
    padding: 13px 32px;
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    width: 904px;
    padding: 13px 60px;
  }
  @media screen and (min-width: 2565px) {
    width: 1170px;
    padding: 13px 695px;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 34px;
  padding: 0% 13px;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.body};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.xl};
  background-color: ${p => p.theme.colors.primary};
  color: inherit;
  cursor: pointer;
`;

const TitleText = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.heading};
`;

const Text = styled.p`
  font-size: ${theme.fontSizes.ms};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.body};
  letter-spacing: 0.01em;
`;

export { GlobalStyled, Box, Button, Conteiner, TitleText, Text };
