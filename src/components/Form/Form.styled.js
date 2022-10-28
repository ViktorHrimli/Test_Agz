import styled from 'styled-components';
import { Button } from 'commonStyle/Common.styled';

const Forms = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 45px;
`;

const ButtonUpload = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  background-color: transparent;
  border: 2px solid;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black87};
  border-radius: ${p => p.theme.radii.sm};
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
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

export { Forms, LabelCheckBox, FormButtons, ButtonUpload };

// import { Field, Form } from 'formik';
// import styled from 'styled-components';
// import { Button } from 'commonStyle/Common.styled';

// const Forms = styled(Form)`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   grid-gap: 45px;
// `;

// const Radio = styled(Field)`
//   width: 20px;
// `;

// const Input = styled(Field)`
//   position: relative;
//   min-width: 328px;
//   padding: 16px 14px;
//   background-color: transparent;
//   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
//   border-radius: ${p => p.theme.radii.sm};

//   :focus::placeholder {
//     color: transparent;
//   }
// `;

// const ButtonUpload = styled.button`
//   position: relative;
//   min-width: 328px;
//   padding: 16px 14px;
//   background-color: transparent;
//   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
//   border-radius: ${p => p.theme.radii.sm};
// `;

// const InputFile = styled(Field)`
//   display: none;
// `;

// const LabelCheckBox = styled.label`
//   display: inline-flex;
//   justify-content: center;
//   grid-gap: 12px;
// `;

// const FormButtons = styled(Button)`
//   background-color: ${p => {
//     if (!p.flag) {
//       return p.theme.colors.disable;
//     }
//   }};
// `;
// export {
//   Forms,
//   LabelCheckBox,
//   FormButtons,
//   Radio,
//   Input,
//   InputFile,
//   ButtonUpload,
// };
