import { Loader } from 'components/Loader/Loader';
import CarsList from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { getCars } from 'services/api';
import css from './Catalog.module.css';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { clearCarsData } from 'redux/slice';
import Filter from 'components/Filter/Filter';


const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onClickBtn = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    dispatch(clearCarsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  return (
    <div className={css.name}>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <Filter />
      <CarsList />
      {32 / 8 > page && !isLoading && <LoadMoreBtn onClick={onClickBtn} />}
    </div>
  );
};

export default Catalog;
