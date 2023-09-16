import CarItem from "components/CarItem/CarItem";
import css from "./CarsList.module.css"
import { useSelector } from "react-redux";
import { selectCars, selectFiltredCars } from "redux/selectors";

const CarsList = () => {
    const cars = useSelector(selectCars)
    const filtred = useSelector(selectFiltredCars)

    const render = filtred ? filtred : cars
    return(
        <ul className={css.item}>
            {render.map((car, index) => (
                <CarItem key={index} car={car} />
            ))}
        </ul>
    )
}

export default CarsList;