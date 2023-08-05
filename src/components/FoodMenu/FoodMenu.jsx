import foodsData from '../../data/foodsData.json';
import './FoodMenu.css'

const FoodMenu = () => {
    return(
        <div className="foods__menu-container">
            {Object.entries(foodsData).map(([category, items]) => (
                <>
                <h1 className='foods__menu-category'>{category}</h1>
                <div key={category} className='foods__menu-wrapper'>
                {items.map(item=> (
                    <div key={item.id} className='foods__item-wrapper'>
                        <img src={item.img} className='foods__item-img'/>
                        <h3 className='foods__item-name'>{item.name}</h3>
                        <ul className='foods__item-ingredients'>
                            {item.ingredients.map((ingredient, index) => (
                                <li key={index} className='foods__item-li'>{ingredient}</li>
                                ))}
                        </ul>
                    </div>
                ))}
                    </div>
                </>
            ))}
        </div>
    )
}

export default FoodMenu;