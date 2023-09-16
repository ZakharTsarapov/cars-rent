import css from "./Filter.module.css"
import { makes, price } from "constants/constants";

const Filter = () => {
    return (
        <form className={css.form}>
        <div>
            <label htmlFor="car-select">Car Brand</label>
            <select name="cars" id="car-select" onChange={()=> {}}>
                <option value="without">All Cars</option>
                {makes.map((el, index) => (
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="price-select">Price/ 1 hour</label>
            <select name="price" id="price-select" onChange={()=> {}}>
                <option value="without">To $</option>
                {price.map((el, index) => (
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
        </div>
        <div className={css.inputs}>
            <div>
                <input
                type="text"
                name="mileageFrom"
                id="mileageFrom">   
                </input>
                <label htmlFor="mileageTo">From</label>
            </div>
            <div>
                <input
                type="text"
                name="mileageTo"
                id="mileageTo">
                </input>
                <label htmlFor="mileageTo">To</label>
            </div>
        </div>
        <button className={css.btn} type="submit" onClick={()=> {}}>Search</button>
        </form>
    )
}

export default Filter;