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
  padding: 16px 14px;
  background-color: transparent;
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
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.error};
  }

  ::before:invalid {
    content: 'Error';
    position: absolute;
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
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  @media screen and (min-width: 768px) {
    width: 269px;
  }
`;

const Lable = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.disable};
`;
export { Input, Radio, InputFile, InputUpload, Lable };

// import { Field } from 'formik';
// import styled from 'styled-components';

// const InputName = styled(Field)`
//   position: relative;
//   min-width: 328px;
//   padding: 16px 14px;
//   background-color: transparent;
//   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
//   border-radius: ${p => p.theme.radii.sm};
// `;

// const InputEmail = styled(Field)`
//   position: relative;
//   min-width: 328px;
//   padding: 16px 14px;
//   background-color: transparent;
//   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
//   border-radius: ${p => p.theme.radii.sm};
// `;

// const LabelName = styled.label`
//   position: absolute;
//   top: ${p => {
//     return !p.foc ? 15 : -10;
//   }}px;
//   left: 10px;
//   color: ${p => p.theme.colors.border};
//   background-color: ${p => {
//     return !p.foc ? '' : p.theme.colors.background;
//   }};
//   padding-inline: 5px;
//   z-index: 2;
// `;

// const LabelEmail = styled.label`
//   position: absolute;
//   top: ${p => {
//     return !p.foc ? 115 : 91;
//   }}px;
//   left: 10px;
//   color: ${p => p.theme.colors.border};
//   background-color: ${p => {
//     return !p.foc ? '' : p.theme.colors.background;
//   }};
//   padding-inline: 5px;
//   z-index: 2;
// `;

// const LabelPhone = styled.label`
//   position: absolute;
//   top: ${p => {
//     return !p.foc ? 215 : 191;
//   }}px;
//   left: 10px;
//   color: ${p => p.theme.colors.border};
//   background-color: ${p => {
//     return !p.foc ? '' : p.theme.colors.background;
//   }};
//   padding-inline: 5px;
//   z-index: 2;
// `;

// export { InputEmail, InputName, InputPhone, LabelEmail, LabelName, LabelPhone };
