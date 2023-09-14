import { useLocation } from 'react-router-dom';
import css from "./CarItem.module.css";

const CarItem = ( { car }) => {
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
        {/* <h2 className={css.text}>{model}</h2> */}
        {/* <p>{rentalPrice}</p>
        <p>{year}</p>
        <p>{rentalCompany}</p>
        <p>{address}</p>
        <p>{type}</p> */}
        </div>
        <button className={css.btn}>Learn More</button>
    </div>
    );
}

export default CarItem;