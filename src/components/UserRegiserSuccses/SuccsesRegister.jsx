import images from 'Images/success-image.svg';
import { Box } from 'commonStyle/Common.styled';
import {
  ConteinerSuccsesReg,
  TitleTextSuccsesReg,
  TextFooter,
} from './SuccsesRegister.styled';

const UserRegister = () => {
  return (
    <ConteinerSuccsesReg>
      <TitleTextSuccsesReg>User successfully registered</TitleTextSuccsesReg>

      <img src={images} alt="succses_photo" />
      <Box
        as="span"
        borderBottom="1px solid #D0CFCF"
        width="100%"
        mb="17px"
        mt="100px"
      ></Box>
      <TextFooter>
        <Box as="span" display="inline" width="5px">
          &#169;
        </Box>
        abz.agency specially for the test task
      </TextFooter>
    </ConteinerSuccsesReg>
  );
};

export { UserRegister };
