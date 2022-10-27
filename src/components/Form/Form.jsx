import { Box } from 'commonStyle/Common.styled';
import { Field, Formik } from 'formik';
import { Forms, LabelCheckBox, FormButtons, Input, Radio } from './Form.styled';

const FormRegistration = () => {
  return (
    <div>
      <Formik>
        <Forms>
          <Box display="flex" flexDirection="column" gridGap="50px">
            <Input type="input" name="name" placeholder="Your name" />
            <Input type="input" name="email" placeholder="Email" />
            <Input type="input" name="phone" placeholder="Phone" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gridGap="9px"
            mr="auto"
          >
            <p>Select your position</p>

            <LabelCheckBox>
              <Radio type="radio" name="checked" value="Frontend developer" />
              Frontend developer
            </LabelCheckBox>
            <LabelCheckBox>
              <Radio type="radio" name="checked" value="Backend developer" />
              Backend developer
            </LabelCheckBox>
            <LabelCheckBox>
              <Radio type="radio" name="checked" value="Designer" />
              Designer
            </LabelCheckBox>
            <LabelCheckBox>
              <Radio type="radio" name="checked" value="QA" />
              QA
            </LabelCheckBox>
          </Box>
          <Field type="file" name="file" placeholder="Upload" />

          <FormButtons type="submit" flag={false}>
            Submit
          </FormButtons>
        </Forms>
      </Formik>
    </div>
  );
};

export { FormRegistration };
