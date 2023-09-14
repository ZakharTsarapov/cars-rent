import { Loader } from 'components/Loader/Loader';
import CarsList from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { getAllCars } from 'services/api';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        setLoading(true);
        const result = await getAllCars();
        setAllCars([...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCars();
  }, []);

  return (
    <>
      <h1>Catalog rental cars</h1>
      <ul>
        <CarsList cars={allCars} />
      </ul>

      {loading && <Loader />}
      {error && <h1>Something went wrong...</h1>}
    </>
  );
};

export default Catalog;
