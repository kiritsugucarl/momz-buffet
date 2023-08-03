import ratesData from '../../data/ratesData.json'
import './ReservationPopup.css'

const ReservationPopup = ({id, onClose, showPopup}) => {
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
                                <input className='reservation__form-date' type="date"/>
                            </div>
                            <div className="reservation__form-item-container">
                                <label className='reservation__form-label'>Time: </label>
                                <input className='reservation__form-time' type="time" min="10:00" max="20:00"/>
                                <br/> <small className='reservation__form-time-notice'>Restaurant Operations are from 10:00 AM to 8:00PM</small>
                            </div>
                            <label className="reservation__form-label">Payment Method: </label>
                            <div className="reservation__payment-method">
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className="reservation__payment-method-item"
                                    name="PoM" value="cash"/> Cash 
                                    
                                </div>
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className='reservation__payment-method-item'
                                    name="PoM" value="gcash"/>GCash
                                    <input type="number" className='reservation__payment-method-number' name='gcash' placeholder='Gcash Number: '/>
                                </div>
                                <div className="reservation__payment-method-item-container">
                                    <input type="radio"
                                    className='reservation__payment-method-item'
                                    name="PoM"
                                    value="masterCard"/> MasterCard
                                    <input type="number"
                                    className='reservation__payment-method-number' name='masterCard' placeholder='Master Card Number: '/>
                                </div>
                            </div>
                        </div>
                        <div className="reservation__payment-button-container">
                            <button className='reservation__payment-button primary-btn'>RESERVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReservationPopup