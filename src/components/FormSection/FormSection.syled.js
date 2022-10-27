import styled from 'styled-components';
import { Conteiner, TitleText } from 'commonStyle/Common.styled';

const ConteinerForm = styled(Conteiner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding: 0 16px 100px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0px 32px 100px 32px;
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    padding: 0px 60px 100px 60px;
  }
  @media screen and (min-width: 2565px) {
    padding: 0px 695px 100px 695px;
  }
`;

const TitleForm = styled(TitleText)`
  max-width: 305px;
  margin-bottom: 50px;
  color: ${p => p.theme.colors.black87};
  text-align: center;

  @media screen and (min-width: 768px) {
    min-width: 550px;
  }
`;

export { ConteinerForm, TitleForm };
