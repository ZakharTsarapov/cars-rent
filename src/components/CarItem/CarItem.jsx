import { useState } from 'react';
import css from './CarItem.module.css';
import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/slice';
import sprite from "../../images/sprite.svg"

const CarItem = ({ car }) => {
  const {
    model,
    year,
    rentalPrice,
    rentalCompany,
    img,
    type,
    description,
    engineSize,
    fuelConsumption,
    id,
    mileage,
    make,
    address,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(favorite => favorite.id === id);
  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.link}>
        <div className={css.thumb}>
        <img className={css.img}
            src={img}
            width="274"
            height="268"
            alt={description} />
            <button
            className={css.favbtn}
            type="button"
            aria-label="Add to favorite"
            onClick={handleClick}
          >
            <svg className={css.favsvg}
              style={isFavorite ? { stroke: '#0B44CD', fill: '#0B44CD' } : {}}
            >
              <use href={`${sprite}#icon-heard-normal`} />
            </svg>
          </button>
        </div>
          <ul className={css.cardHead}>
            <li>
            {make}  <span className={css.model}>{model}</span>,  {year} 
            </li>
            <li>{rentalPrice}</li>
          </ul>
          <ul className={css.item}>
            <li>{rentalCompany}</li>
            <li>{type}</li>
            <li>{engineSize}</li>
            <li>{country}</li>
            <li>{city}</li>
            <li>{fuelConsumption}</li>
            <li>{mileage}</li>
          </ul>
        </div>
        <button type="button" className={css.btn} onClick={toggleModal}>
          Learn More
        </button>
      </div>

      {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <CarDetails car={car} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
