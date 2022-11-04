import { useState, useEffect } from 'react';
import { UsersItems } from 'components/UsersItems/UsersItems';
import { getUsersFetch } from 'components/ApiServise/Api';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpienr';
import {
  GalleryUser,
  TitleUsers,
  ConteinerUsers,
  BtnLoadMore,
} from './Users.styled';
import { useSelector } from 'react-redux';

const Users = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const newUser = useSelector(state => state.users);

  const handeClickLoadMore = () => {
    setPage(prev => (prev += 1));
  };

  useEffect(() => {
    setisLoading(true);
    getUsersFetch().then(({ users }) => {
      return setData([...users]);
    });
    setisLoading(false);
  }, []);

  useEffect(() => {
    if (page === 1) return;
    if (page > 13) {
      setIsButtonShow(false);
      return;
    }

    setisLoading(true);

    getUsersFetch(page).then(({ users }) => {
      return setData(prev => prev.concat(users));
    });

    setisLoading(false);
  }, [page]);

  useEffect(() => {
    if (!newUser) return;
    setData(prev => [...newUser, ...prev]);
  }, [newUser]);

  return (
    <ConteinerUsers>
      <TitleUsers>Working with GET request</TitleUsers>
      <GalleryUser>
        {data.map(item => (
          <UsersItems key={item.id} {...item} />
        ))}
      </GalleryUser>
      {isLoading && <LoadSpiner />}
      {isButtonShow && (
        <BtnLoadMore onClick={handeClickLoadMore} type="button">
          Show more
        </BtnLoadMore>
      )}
    </ConteinerUsers>
  );
};

export { Users };
