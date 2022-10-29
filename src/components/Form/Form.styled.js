import styled from 'styled-components';
import { Button } from 'commonStyle/Common.styled';

const Forms = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonUpload = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  border: 2px solid;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black87};
  border-radius: ${p => p.theme.radii.sm};
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const LabelCheckBox = styled.label`
  display: inline-flex;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.ms};
  line-height: ${p => p.theme.lineHeights.body};
  grid-gap: 12px;
`;

const FormButtons = styled(Button)`
  background-color: ${p => {
    if (!p.flag) {
      return p.theme.colors.disable;
    }
  }};
  :hover,
  focus {
    background-color: ${p => {
      if (!p.flag) {
        return p.theme.colors.disable;
      }
    }};
  }
`;

export { Forms, LabelCheckBox, FormButtons, ButtonUpload };
