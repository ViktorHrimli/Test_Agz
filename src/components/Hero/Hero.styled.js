import styled from 'styled-components';
import { Text, TitleText } from 'commonStyle/Common.styled';
import mob from 'Images/BG.jpg';
import tab from 'Images/BG_Tab.jpg';
import desk from 'Images/BG_Desktop.jpg';
import deskBig from 'Images/BG_Big.jpg';

const HeroBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${mob});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding: 40px 16px 71px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 89px 194px 89px 194px;
    background-image: url(${tab});
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    padding: 164px 322px 164px 322px;
    background-image: url(${desk});
  }
  @media screen and (min-width: 2565px) {
    padding: 164px 395px 164px 395px;
    background-image: url(${deskBig});
  }
`;

const TextHero = styled(Text)`
  color: ${p => p.theme.colors.white};
  max-width: 328px;
  text-align: center;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 385px;
  }
`;

const TitleTextHero = styled(TitleText)`
  color: ${p => p.theme.colors.white};
  max-width: 312px;
  text-align: center;
  margin-bottom: 21px;
  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;

export { HeroBackground, TextHero, TitleTextHero };
