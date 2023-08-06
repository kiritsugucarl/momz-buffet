// import { Link } from 'react-router-dom'
import FoodMenu from '../../components/FoodMenu/FoodMenu'
import './Food.css'

const Food = () => {
    return(
        <main className='foods container section'>
            <h1 className='foods__h1'>FOOD LIST AVAILABLE:</h1>
            <FoodMenu />
        </main>
    )
}

export default Food