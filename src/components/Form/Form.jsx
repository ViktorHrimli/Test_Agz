import { useState, createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'commonStyle/Common.styled';
import { Forms, LabelCheckBox, FormButtons, ButtonUpload } from './Form.styled';
import { Input, InputFile, InputUpload, Radio, Lable } from './InputForm.syled';
import { postUser, getTokenFetch } from '../ApiServise/Api';
import { getNewUser } from '../redux/slice';
import imgUser from 'Images/1556866724_3.jpg';

const FormRegistration = ({ onVisible }) => {
  const [valueUpload, setValueUpload] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [data, setData] = useState(null);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const notVisibleInput = createRef();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    const { name, email, phone, checked, file } = event.currentTarget.elements;

    const newUser = {
      id: 1024,
      name: name.value,
      email: email.value,
      phone: phone.value,
      position: checked.value,
      photo: imgUser,
    };

    const id = Number(checked.value);
    formData.append('position_id', id);
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('photo', file.files[0]);

    dispatch(getNewUser(newUser));
    setData(formData);
    setValueUpload('');
    setIsButtonDisable(false);
    onVisible(true);
    event.currentTarget.reset();
  };

  const setSelectedFile = event => {
    setIsButtonDisable(true);
    setValueUpload(event.name);
  };

  const onClickButton = event => {
    notVisibleInput.current.click();
  };

  useEffect(() => {
    if (!data) return;

    getTokenFetch().then(({ token }) => setToken(token));
    postUser(data, token).then(user => console.log(user));

    return () => {
      setData(null);
      setToken('');
    };
  }, [data, token]);

  return (
    <div>
      <Forms onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gridGap="50px">
          <Input
            type="input"
            name="name"
            placeholder="Your name"
            minLength={2}
            maxLength={60}
            title="Error"
            required
          />
          <Input
            type="input"
            name="email"
            placeholder="Email"
            minLength={8}
            required
            pattern="(^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)"
          />
          <Lable>
            <Input
              type="input"
              name="phone"
              placeholder="Phone"
              required
              pattern="^[\+]{0,1}380([0-9]{9})$"
            />
            +38 (XXX) XXX - XX - XX
          </Lable>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gridGap="7px"
          mr="auto"
          mt="28px"
          mb="44px"
        >
          <Box as="p" mb="7px">
            Select your position
          </Box>
          <LabelCheckBox>
            <Radio type="radio" name="checked" value="1" required min={1} />
            Frontend developer
          </LabelCheckBox>
          <LabelCheckBox>
            <Radio type="radio" name="checked" value="2" required min={1} />
            Backend developer
          </LabelCheckBox>
          <LabelCheckBox>
            <Radio type="radio" name="checked" value="3" required min={1} />
            Designer
          </LabelCheckBox>
          <LabelCheckBox>
            <Radio type="radio" name="checked" value="4" required min={1} />
            QA
          </LabelCheckBox>
        </Box>

        <label htmlFor="file" onClick={onClickButton}>
          <InputFile
            type="file"
            name="file"
            accept="image/jpeg, image/png, image/jpg"
            ref={notVisibleInput}
            onChange={e => setSelectedFile(e.target.files[0])}
            required
          />

          <Box display="flex" mb="50px">
            <ButtonUpload type="button">Upload</ButtonUpload>
            <InputUpload
              onChange={e => console.log}
              value={valueUpload ? valueUpload : ''}
              placeholder="Upload your photo"
            />
          </Box>
        </label>
        <FormButtons type="submit" flag={isButtonDisable}>
          Sign up
        </FormButtons>
      </Forms>
    </div>
  );
};
export { FormRegistration };
