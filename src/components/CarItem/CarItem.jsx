import { Link, useLocation } from 'react-router-dom';
import css from "./CarItem.module.css";

const CarItem = ( { car }) => {
    const {
        model,
        year,
        rentalPrice,
        rentalCompany,
        address,
        img,
        type,
        description,
        id,
    } = car;

    const location = useLocation();
    const pathName = location.pathname.includes('/catalog') ? '' : 'catalog/';

    return (
    <div className={css.container}>
        <Link className={css.link} to={`${pathName}${id}`} state={{ from: location }}>
        <img className={css.img} src={img} width="274" height="268" alt={description}></img>
        <ul className={css.item}>
            <li>{rentalPrice}</li>
            <li>{model}</li>
            <li>{year}</li>
            <li>{rentalCompany}</li>
            <li>{address}</li>
            <li>{type}</li>
        </ul>
        {/* <h2 className={css.text}>{model}</h2> */}
        {/* <p>{rentalPrice}</p>
        <p>{year}</p>
        <p>{rentalCompany}</p>
        <p>{address}</p>
        <p>{type}</p> */}
        </Link>
    </div>
    );
}

export default CarItem;