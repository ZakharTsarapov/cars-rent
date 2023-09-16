import css from "./Filter.module.css"
import { makes, price } from "constants/constants";
import sprite from "../../images/sprite.svg"


const Filter = () => {


    return (
        <form className={css.form} >
        <div className={css.thumb}>
            <label className={css.headLabel} htmlFor="car-select">Car Brand</label>
            <select className={css.select} name="cars" id="car-select" onChange={()=> {}}>
                <option value="without">All Cars</option>
                {makes.map((el, index) => (
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
            <svg className={css.svg}>
                <use width="20" height="20" href={`${sprite}#icon-chevron-down`} />
            </svg>
        </div>
        <div className={css.thumb}>
            <label className={css.headLabel} htmlFor="price-select">Price/ 1 hour</label>
            <select className={css.secondSelect} name="price" id="price-select" onChange={()=> {}}>
                <option value="without">To $</option>
                {price.map((el, index) => (
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
            <svg className={css.svg}>
                <use width="20" height="20" href={`${sprite}#icon-chevron-down`} />
            </svg>
        </div>
        <div className={css.thumb}>
        <label className={css.headLabel}>Car mileage / km</label>
        <div className={css.inputs}>
            <div className={css.inputThumb}>
                <input
                className={css.input}
                type="text"
                name="mileageFrom"
                id="mileageFrom"
                style={{ paddingLeft: '60px', borderRadius: '14px 0 0 14px' }}>   
                </input>
                <label className={css.inpText} htmlFor="mileageFrom">From</label>
            </div>
            <div className={css.inputThumb}>
                <input
                className={css.input}
                type="text"
                name="mileageTo"
                id="mileageTo"
                style={{ paddingLeft: '44px', borderRadius: '14px 0 0 14px' }}>
                </input>
                <label className={css.inpText} htmlFor="mileageTo">To</label>
            </div>
        </div>
        </div>

        <button className={css.btn} type="submit">Search</button>
        </form>
    )
}

export default Filter;