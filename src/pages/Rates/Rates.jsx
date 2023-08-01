import './Rates.css'

const Rates = () => {
    return(
        <main className='rates container section'>
            <h1 className='rates__title'>DINING RATES</h1>
            <div className="rates__category-container">
                <h4 className='rates__subtitle'>UNLI PLATE BUFFET</h4>
                <p className='rates__subnotice'>(Count is per head, and depending on the paid set and chosen food theme will be the food served)</p>
                <div className="rates__items">
                    <div className="rates__unliPlate-item-1 rates__unliPlate-item">
                        <img src='https://cdn-icons-png.flaticon.com/512/8131/8131340.png' className='rates__offer-img'/>
                        <h4 className='rates__offer-title'>
                            UNLI PLATES <br/>
                            & <br/>
                            FRIEND SERVING
                        </h4>
                        <h4 className='rates__offer-price'>₱ 1500.00</h4>
                        <h5 className='rates__offer-subtitle'>Includes: </h5>
                        <ul className='rates__offer-ul'>
                            <li className='rates__offer-li'>Access to the ff food: Common, Visitor, 5 Specialty Dishes, 3 Royal Dishes of 2 given theme</li>
                            <li className='rates__offer-li'>Unlimited Plates for 1.5 hours</li>
                        </ul>
                    </div>
                    <div className="rates__unliPlate-item-2 rates__unliPlate-item">
                        <img src='https://cdn-icons-png.flaticon.com/512/2385/2385856.png' className='rates__offer-img'/>
                        <h4 className='rates__offer-title'>
                            UNLI PLATES <br/>
                            & <br/>
                            KING SERVING
                        </h4>
                        <h4 className='rates__offer-price'>₱ 2000.00</h4>
                        <h5 className='rates__offer-subtitle'>Includes: </h5>
                        <ul className='rates__offer-ul'>
                            <li className='rates__offer-li'>Access to all types of food of 3 given theme</li>
                            <li className='rates__offer-li'>Unlimited Plates for 2 hours</li>
                        </ul>
                    </div>
                    <div className="rates__unliPlate-item-3 rates__unliPlate-item">
                        <img src='https://cdn-icons-png.flaticon.com/512/2744/2744337.png' className='rates__offer-img'/>
                        <h4 className='rates__offer-title'>
                            UNLI PLATES <br/>
                            & <br/>
                            VISITOR SERVING
                        </h4>
                        <h4 className='rates__offer-price'>₱ 1000.00</h4>
                        <h5 className='rates__offer-subtitle'>Includes: </h5>
                        <ul className='rates__offer-ul'>
                            <li className='rates__offer-li'>Access to the ff food: Common, Visitor, 3 Specialty Dishes, 2 Royal Dishes of given theme</li>
                            <li className='rates__offer-li'>Unlimited Plates for 1 hour</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rates__category-container">
                <h4 className="rates__subtitle">JUST CAME BY MOMENT</h4>
                <p className='rates__subnotice'>(Count is per head, and depending on the paid set and chosen food theme will be the food served)</p>
                <div className="rates__items rates__moment-container">
                    <div className="rates__offer">
                        <img src='https://icons-for-free.com/iconfiles/png/512/fast+flash+good+light+speed+icon-1320195378845312678.png' className='rates__offer-img'/>
                        <h4 className='rates__offer-title'>
                            EXPRESS FOOD
                        </h4>
                        <h4 className='rates__offer-price'>₱ 400.00</h4>
                        <p className='rates__offer-desc'>
                            Fast-cook foods perfect for people in rush or just want to try the food of their chosen theme under express category. Only one theme can be chosen
                        </p>
                    </div>
                    <div className="rates__offer">
                        <img src='https://cdn-icons-png.flaticon.com/512/1886/1886722.png' className='rates__offer-img'/>
                        <h4 className='rates__offer-title'>
                            QUALITY FOOD
                        </h4>
                        <h4 className='rates__offer-price'>₱ 550.00</h4>
                        <p className='rates__offer-desc'>
                            Quality foods that are for people who can wait and wants to try the food of their chosen theme. Only one theme can be chosen.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Rates