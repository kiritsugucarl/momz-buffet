/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NormalPlateCard = ({id, color, img, title, price, description}) => {
    const backgroundColor = {
        backgroundColor: color
    }

    return(
        <div className={`rates__unliPlate-item-${id} rates__unliPlate-item`} style={backgroundColor} key={title}>
            <img src={img} className='rates__offer-img' />
            <h4 className="rates__offer-title">{title}</h4>
            <h4 className="rates__offer-price">{price}</h4>
            <p className="rates__offer-desc">{description}</p>
            <Link className="rates__offer-link primary-btn" to={`/rates-${id}`}>RESERVE</Link>
        </div>
    )
}

export default NormalPlateCard