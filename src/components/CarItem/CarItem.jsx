import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import css from "./CarItem.module.css";
import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';

const CarItem = ({ car }) => {

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

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
    } = car;

    const location = useLocation();
    const pathName = location.pathname.includes('/catalog') ? '' : 'catalog/';

    return (
        <>
    <div className={css.container}>
        <div className={css.link} to={`${pathName}${id}`} state={{ from: location }}>
        <img className={css.img} src={img} width="274" height="268" alt={description}></img>
        <ul className={css.cardHead}>
        <li>{model} {year}</li>
        <li>{rentalPrice}</li>
        </ul>
        <ul className={css.item}>
            <li>{rentalCompany}</li>
            <li>{type}</li>
            <li>{engineSize}</li>
            <li>{fuelConsumption}</li>
            <li>{mileage}</li>
            <li>{make}</li>
        </ul>
        </div>
        <button type="button" className={css.btn} onClick={toggleModal}>Learn More</button>
    </div>

    {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <CarDetails car={car} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
    );
}

export default CarItem;