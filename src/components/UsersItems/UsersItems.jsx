import { UserCard, UserEnmail, UserImg, UserText } from './UsersItems.styled';
import { Text } from 'commonStyle/Common.styled';
import { sliceLongText } from 'components/Utils/SliceLongText';

const UsersItems = ({ email, photo, name, position, phone }) => {
  return (
    <UserCard>
      <UserImg as="img" src={photo} alt={name} />
      <UserText prop={name}>
        {name.length > 30 ? sliceLongText(name) : name}
      </UserText>

      <Text>{position}</Text>
      <UserEnmail prop={email}>
        {email.length > 30 ? sliceLongText(email) : email}
      </UserEnmail>
      <Text>{phone}</Text>
    </UserCard>
  );
};

export { UsersItems };
