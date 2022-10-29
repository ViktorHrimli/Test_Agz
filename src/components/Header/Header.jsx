import { Box, Button } from 'commonStyle/Common.styled';
import { ConteinerHeder } from './Header.styled';
import Logo from 'Images/Logo.svg';

const Header = () => {
  return (
    <ConteinerHeder>
      <Box>
        <Box
          as="img"
          width="104"
          height="26"
          mt="4px"
          src={Logo}
          alt="TestTask"
        />
      </Box>
      <Box display="flex" gridGap="10px">
        <Button type="button">Users</Button>
        <Button type="button">Sign up</Button>
      </Box>
    </ConteinerHeder>
  );
};
export { Header };
