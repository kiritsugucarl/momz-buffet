import { useState } from 'react';
import ratesData from '../../data/ratesData.json'
import './ReservationPopup.css'

const ReservationPopup = ({id, onClose, showPopup}) => {
    const [showNotification, setShowNotification] = useState(false);

    const handleButtonClick = () => {
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };

    const isUnliPlate = id <= ratesData.unliPlates.length;

    const category = isUnliPlate ? "unliPlates" : "normalPlates";
    const item = ratesData[category].find((plate) => plate.id === id)

    return(
        <div className="reservation__overlay">
            <div className="reservation__wrapper">
                <div className="reservation__close-button-wrapper">
                    <button className="close__button" onClick={onClose}>X</button>
                </div>
                <div className="reservation__content">
                    <h1 className='reservation__id'>Reservation for ID : {id}</h1>
                    <form className='reservation__form'>
                        <h1 className='reservation__title'>Dining: {item.title}</h1>
                        <div className="reservation__form-container">
                            <div className="reservation__form-item-container">
                                <label className='reservation__form-label'>Date Reservation: </label>
                                <input className='reservation__form-date' 
                                type="date" />
                            </div>
                            <div className="reservation__form-item-container">
                                <label className='reservation__form-label'>Time: </label>
                                <input className='reservation__form-time' type="time" min="10:00" max="20:00"/>
                            </div>
                            <small className='reservation__form-time-notice'>Restaurant Operations are from 10:00 AM to 8:00PM</small>
                            <label className="reservation__form-label">Payment Method: </label>
                            <div className="reservation__payment-method">
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className="reservation__payment-method-item"
                                    name="PoM" value="cash"/> 
                                    <span className='reservation__payment-method-name'> Cash </span> 
                                    
                                </div>
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className='reservation__payment-method-item'
                                    name="PoM" value="gcash"/>
                                    <span className='reservation__payment-method-name'> GCash </span>
                                    <input type="number" className='reservation__payment-method-number' name='gcash' placeholder='Gcash Number: '/>
                                </div>
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className='reservation__payment-method-item'
                                    name="PoM"
                                    value="masterCard"/> 
                                    <span className='reservation__payment-method-name'> MasterCard </span>
                                    <input type="number"
                                    className='reservation__payment-method-number' name='masterCard' placeholder='Master Card Number: '/>
                                </div>
                            </div>
                        </div>
                        <div className="reservation__payment-button-container">
                            <button type='button' className='reservation__payment-button primary-btn' onClick={handleButtonClick}>RESERVE</button>
                        </div>
                    </form>
                </div>
                {showNotification && (
                    <div className={`notification__container ${showNotification ? 'show' : ''}`}>
                        <div className="notification__content">
                            <h1 className='notification__notice-header'>Success!</h1>
                            <p className='notification__notice'>Your reservation has been placed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReservationPopup