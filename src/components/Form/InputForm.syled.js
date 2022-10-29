import styled from 'styled-components';

const Radio = styled.input`
  position: relative;
  height: 22px;
  width: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid ${p => p.theme.colors.secondary};
  }
  :checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.secondary};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

const Input = styled.input`
  position: relative;
  height: 18px;
  padding: 16px 14px;
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  @media screen and (min-width: 360px) and (max-width: 767px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 352px;
  }

  :focus::placeholder {
    color: transparent;
  }

  :invalid:not(:placeholder-shown) {
    border: ${p => p.theme.borders.bold} ${p => p.theme.colors.error};
  }

  :focus:invalid:not(:placeholder-shown)::after {
    content: 'Error Text';
    top: 0px;
    left: 0px;
    display: inline-flex;
    width: 30px;
    height: 20px;
    color: red;
  }
`;
const InputFile = styled.input`
  display: none;
`;

const InputUpload = styled(Input)`
  width: 217px;
  border-left: none;
  outline: none;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  @media screen and (min-width: 768px) {
    width: 269px;
  }
`;

const Lable = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.disable};
`;
export { Input, Radio, InputFile, InputUpload, Lable };
