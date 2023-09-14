import { Loader } from 'components/Loader/Loader';
import CarsList from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { getAllCars } from 'services/api';
import css from "./Catalog.module.css"
import Modal from 'components/Modal/Modal';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal(showModal => !showModal);

  };

  return (
    <>
      <h1 className={css.name}>Catalog rental cars</h1>
      <ul className={css.list}>
        <CarsList cars={allCars} />
      </ul>

      {showModal && (
        <Modal 
        onClose={toggleModal} />
      )}

      {loading && <Loader />}
      {error && <h1>Something went wrong...</h1>}
    </>
  );
};

export default Catalog;
