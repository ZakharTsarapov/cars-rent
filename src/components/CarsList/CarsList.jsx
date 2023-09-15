import CarItem from "components/CarItem/CarItem";
import css from "./CarsList.module.css"
import { useSelector } from "react-redux";
import { selectCars } from "redux/selectors";

const CarsList = () => {
    const cars = useSelector(selectCars)
    return(
        <ul className={css.item}>
            {cars.map((car, index) => (
                <CarItem key={index} car={car} />
            ))}
        </ul>
    )
}

export default CarsList;