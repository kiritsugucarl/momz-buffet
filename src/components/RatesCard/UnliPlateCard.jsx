/* eslint-disable react/prop-types */
import React , { useState, useEffect } from "react";
import ReservationPopup from "../ReservationPopup/ReservationPopup";

const UnliPlateCard = ({id, color, img, title, price, offerInclusion}) =>{
    const backgroundColor = {
        backgroundColor: color
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

    // Split the title string into separate lines based on "<br/>" tags
  const titleLines = title.split('<br/>').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < title.split.length - 1 && <br />} {/* Add <br> element between lines */}
    </React.Fragment>
  ));

    return(
        <div className={`rates__unliPlate-item-${id} rates__unliPlate-item`} style={backgroundColor} key={title}>
            <img src={img} className='rates__offer-img'/>
            <h4 className="rates__offer-title" >{titleLines}</h4>
            <h4 className="rates__offer-price">{price}</h4>
            <h5 className="rates__offer-subtitle">Includes: </h5>
            <ul className="rates__offer-ul">
                {offerInclusion.map((inclusion, index) => (
                    <li className="rates__offer-li" key={index}>{inclusion}</li>
                ))}
            </ul>
            <button className="rates__offer-link primary-btn" onClick={handlePopupToggle}>
                RESERVE
            </button>
            {showPopup && <ReservationPopup id={id} onClose={handlePopupToggle} showPopup={showPopup}/>}
        </div>
    )
}

export default UnliPlateCard;