import { Field, Form } from 'formik';
import styled from 'styled-components';
import { Button } from 'commonStyle/Common.styled';

const Forms = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 45px;
`;

const Input = styled(Field)`
  position: relative;
  min-width: 328px;
  padding: 16px 14px;
  background-color: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};

  :focus::placeholder {
    color: transparent;
  }
`;

const Radio = styled(Field)`
  width: 20px;
`;

const LabelCheckBox = styled.label`
  display: inline-flex;
  justify-content: center;
  grid-gap: 12px;
`;
const FormButtons = styled(Button)`
  background-color: ${p => {
    if (!p.flag) {
      return p.theme.colors.disable;
    }
  }};
`;
export { Forms, LabelCheckBox, FormButtons, Input, Radio };
