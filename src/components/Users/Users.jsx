import { useState, useEffect } from 'react';
import { Button } from 'commonStyle/Common.styled';
import { UsersItems } from 'components/UsersItems/UsersItems';
import { GalleryUser, TitleUsers, ConteinerUsers } from './Users.styled';
import { getUsersFetch } from 'components/ApiServise/Api';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpienr';

const Users = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

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
        <Button onClick={handeClickLoadMore} type="button">
          Show more
        </Button>
      )}
    </ConteinerUsers>
  );
};

export { Users };
