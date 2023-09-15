import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import FavoriteList from 'components/FavoriteList/FavoriteList';

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <FavoriteList />
    </div>
  );
};

export default Favorites;
