import { useState } from 'react';
import { FormRegistration } from 'components/Form/Form';
import { ConteinerForm, TitleForm } from './FormSection.syled';
import { UserRegister } from '../UserRegiserSuccses/SuccsesRegister';

const FormsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ConteinerForm>
        <TitleForm>Working with POST request</TitleForm>
        <FormRegistration onVisible={setIsVisible} />
      </ConteinerForm>
      {isVisible && <UserRegister />}
    </>
  );
};

export { FormsSection };
