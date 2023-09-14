import CarItem from "components/CarItem/CarItem";
import css from "./CarsList.module.css"

const CarsList = ({ cars }) => {
    return(
        <li className={css.item}>
            {cars.map(car => {
                return <CarItem key={car.id} car={car} />;
            })}
        </li>
    )
}

export default CarsList;