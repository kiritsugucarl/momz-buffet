/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReservationPopup from "../ReservationPopup/ReservationPopup";

const NormalPlateCard = ({id, color, img, title, price, description}) => {
    const backgroundColor = {
        backgroundColor: color,
    }

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () =>{
        setShowPopup(!showPopup);
    }

    useEffect(() => {
        if(showPopup){
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [showPopup])

    return(
        <div className={`rates__unliPlate-item-${id} rates__unliPlate-item`} style={backgroundColor} key={title}>
            <img src={img} className='rates__offer-img' />
            <h4 className="rates__offer-title">{title}</h4>
            <h4 className="rates__offer-price">{price}</h4>
            <p className="rates__offer-desc">{description}</p>
            <button className="rates__offer-link primary-btn" onClick={handlePopupToggle}>
                RESERVE
            </button>
            {showPopup && <ReservationPopup id={id} onClose={handlePopupToggle} showPopup={showPopup}/>}
        </div>
    )
}

export default NormalPlateCard