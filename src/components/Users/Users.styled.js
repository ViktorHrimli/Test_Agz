import styled from 'styled-components';
import { TitleText, Conteiner, Button } from 'commonStyle/Common.styled';

const GalleryUser = styled.ul`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    grid-gap: 29px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 2565px) {
  }
`;

const TitleUsers = styled(TitleText)`
  max-width: 305px;
  color: ${p => p.theme.colors.black87};
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 500px;
  }
`;

const ConteinerUsers = styled(Conteiner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 50px;

  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding: 140px 16px 140px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 140px 32px 140px 32px;
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    padding: 140px 60px 140px 60px;
  }
  @media screen and (min-width: 2565px) {
    padding: 140px 695px 140px 695px;
  }
`;
const BtnLoadMore = styled(Button)`
  padding: 1px 20px;
`;
export { GalleryUser, TitleUsers, ConteinerUsers, BtnLoadMore };
