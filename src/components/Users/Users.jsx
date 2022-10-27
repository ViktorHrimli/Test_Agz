import { useState } from 'react';
import { Button } from 'commonStyle/Common.styled';
import { UsersItems } from 'components/UsersItems/UsersItems';
import { GalleryUser, TitleUsers, ConteinerUsers } from './Users.styled';

const Users = () => {
  const [isLoading, setisLoading] = useState(true);

  return (
    <ConteinerUsers>
      <TitleUsers>Working with GET request</TitleUsers>
      <GalleryUser>
        {isLoading ? <UsersItems /> : <div>Loading...</div>}
      </GalleryUser>
      <Button type="button">Show more</Button>
    </ConteinerUsers>
  );
};

export { Users };
