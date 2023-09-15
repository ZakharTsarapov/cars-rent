import CarItem from "components/CarItem/CarItem";
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import css from "./FavoriteList.module.css";

const FavoriteList = () => {
    const cars = useSelector(selectFavorites);
    return (
        <ul className={css.item}>
            {cars.map((car, index) => (
                <CarItem key={index} car={car} />
            ))}
        </ul>
    )
}

export default FavoriteList;