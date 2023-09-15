import CarItem from "components/CarItem/CarItem";
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const FavoriteList = () => {
    const cars = useSelector(selectFavorites);
    return (
        <ul>
            {cars.map((car, index) => (
                <CarItem key={index} car={car} />
            ))}
        </ul>
    )
}

export default FavoriteList;