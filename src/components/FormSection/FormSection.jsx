import { FormRegistration } from 'components/Form/Form';
import { ConteinerForm, TitleForm } from './FormSection.syled';

const FormsSection = () => {
  return (
    <ConteinerForm>
      <TitleForm>Working with POST request</TitleForm>
      <FormRegistration />
    </ConteinerForm>
  );
};

export { FormsSection };
