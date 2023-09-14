import { Link, useLocation } from 'react-router-dom';

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
    <div>
        <Link to={`${pathName}${id}`} state={{ from: location }}>
        <img src={img} width="395" alt={description}></img>
        <h2>{model}</h2>
        <p>{rentalPrice}</p>
        <p>{year}</p>
        <p>{rentalCompany}</p>
        <p>{address}</p>
        <p>{type}</p>
        </Link>
    </div>
    );
}

export default CarItem;