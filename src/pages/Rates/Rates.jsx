// import { Link } from 'react-router-dom'
import NormalPlateCard from '../../components/RatesCard/NormalPlateCard'
import UnliPlateCard from '../../components/RatesCard/UnliPlateCard'
import ratesData from '../../data/ratesData.json'
import './Rates.css'

const Rates = () => {
    return(
        <main className='rates container section'>
            <h1 className='rates__title'>DINING RATES</h1>
            <div className="rates__category-container">
                <h4 className='rates__subtitle'>UNLI PLATE BUFFET</h4>
                <p className='rates__subnotice'>(Count is per head, and depending on the paid set and chosen food theme will be the food served)</p>
                <div className="rates__items">
                    {ratesData.unliPlates.map((unliPlateData) => (
                        <UnliPlateCard
                        key={unliPlateData.id}
                        id={unliPlateData.id}
                        color={unliPlateData.color}
                        img={unliPlateData.img}
                        title={unliPlateData.title}
                        price={unliPlateData.price}
                        offerInclusion={unliPlateData["offerInclusion"]}
                        />
                    ))}
                </div>
            </div>
            <div className="rates__category-container">
                <h4 className="rates__subtitle">JUST CAME BY MOMENT</h4>
                <p className='rates__subnotice'>(Count is per head, and depending on the paid set and chosen food theme will be the food served)</p>
                <div className="rates__items">
                    {ratesData.normalPlates.map((normalPlateData)=>(
                        <NormalPlateCard
                        key={normalPlateData.id}
                        id={normalPlateData.id}
                        color={normalPlateData.color}
                        img={normalPlateData.img}
                        title={normalPlateData.title}
                        price={normalPlateData.price}
                        description={normalPlateData.description}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Rates