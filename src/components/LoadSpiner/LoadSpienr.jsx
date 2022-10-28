import { ColorRing } from 'react-loader-spinner';

const LoadSpiner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3']}
    />
  );
};

export { LoadSpiner };
