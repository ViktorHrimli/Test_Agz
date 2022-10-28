import { UserCard, UserEnmail } from './UsersItems.styled';
import { Box, Text } from 'commonStyle/Common.styled';

const UsersItems = ({ id, email, photo, name, position, phone }) => {
  return (
    <UserCard>
      <Box as="img" mb="20px" src={photo} alt={name} />
      <Box as="p" mb="20px">
        {name}
      </Box>

      <Text>{position}</Text>
      <UserEnmail>{email}</UserEnmail>
      <Text>{phone}</Text>
    </UserCard>
  );
};

export { UsersItems };
