import css from "./CarDetails.module.css"
import sprite from "../../images/sprite.svg"

const CarDetails = ({ car, toggleModal }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  const carConditions = rentalConditions.split('\n');
  const ageCarConditions = carConditions[0].split(': ');

  function formatNumberWithComma(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const formattedMileage = formatNumberWithComma(mileage);

  return(
    <div className={css.modalContainer}>
        <button className={css.closeBtn} type="button" onClick={toggleModal}>
            <svg className={css.svg}>
                <use href={`${sprite}#icon-x-close`} />
            </svg>
        </button>
        <div>
        <img className={css.carImage} src={img} alt={`${make} ${model}`}/>
        </div>
        <div className={css.info}>
            <p>{make} <span className={css.model}>{model}</span>, {year} </p>
        </div>
        <ul className={css.firstList}>
            <li>{city}</li>
            <li>{country}</li>
            <li>Id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {type}</li>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
        </ul>
        <p className={css.desc}>{description}</p>
        <p className={css.accs}>Accessories and functionalities:</p>
        <ul className={css.firstList}>
            {accessories.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul className={css.firstList}>
            {functionalities.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <p className={css.accs}>Rental Conditions:</p>
        <ul className={css.secondList}>
            <li>
                {ageCarConditions[0]}:{""}
                <span className={css.int}>{ageCarConditions[1]}</span>
            </li>
            {carConditions.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        <li>
            Mileage: <span className={css.int}>{formattedMileage}</span>
        </li>
        <li>
            Price: <span className={css.int}>{rentalPrice}</span>
        </li>
        </ul>
        <a className={css.btn} href="tel:+380730000000">Rental Car</a>
    </div>
  )
};

export default CarDetails;