/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const UnliPlateCard = ({id, color, img, title, price, offerInclusion}) =>{
    const backgroundColor = {
        backgroundColor: color
    }

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
            <Link className="rates__offer-link primary-btn" to={`/rates-${id}`}>RESERVE</Link>
        </div>
    )
}

export default UnliPlateCard;