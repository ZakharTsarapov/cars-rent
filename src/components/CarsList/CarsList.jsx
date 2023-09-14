import CarItem from "components/CarItem/CarItem";

const CarsList = ({ cars }) => {
    return(
        <li>
            {cars.map(car => {
                return <CarItem key={car.id} car={car} />;
            })}
        </li>
    )
}

export default CarsList;