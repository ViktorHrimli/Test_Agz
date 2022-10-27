import photo from 'Images/photo-cover.svg';
import { UserCard } from './UsersItems.styled';
import { Box, Text } from 'commonStyle/Common.styled';
const data = [
  {
    id: 1,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 4,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 5,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 6,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 7,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 8,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
  {
    id: 9,
    name: 'wadawdawd',
    email: 'awawdad@gmail.com',
    photo,
    tel: +3809693923,
    tech: 'Frontend Developer',
  },
];

const UsersItems = () => {
  return (
    <>
      {data.map(({ email, id, name, photo, tech, tel }) => {
        return (
          <UserCard key={id}>
            <Box as="img" mb="20px" src={photo} alt={name} />

            <Box as="p" mb="20px">
              {name}
            </Box>

            <Text>{tech}</Text>
            <Text>{email}</Text>
            <Text>{tel}</Text>
          </UserCard>
        );
      })}
    </>
  );
};

export { UsersItems };
