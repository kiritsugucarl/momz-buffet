import { Link } from 'react-router-dom'
import buffetImg from '/hero-img.jpg'
import './Home.css'

const Home = () => {
    return (
        <main className="home container section">
            <img className="home__hero" src={buffetImg}/>
            <h1 className="home__title">
                MOMZ BUFFET & <br/>
                FOOD SERVICES
            </h1>
            <p className='home__p'>
                Be it <strong className="home__strong-1">Friday Nights</strong>, <strong className="home__strong-2">Weekend Outings</strong>, <strong className="home__strong-3">Birthday Celebrations</strong>, or just <strong className="home__strong-4">hanging out with your friends</strong>, We are ready to serve you!
            </p>
            <p className='home__p'>
                Welcome to Momz, your home away from home all things delicious! We are passionate about providing our guests with a warm and memorable experience.
            </p>
            <p className="home__p">
                Our buffet features a wide variety of dishes, all made with fresh, high-quality ingredients. We have something for everyone, check out our <Link to="#" className='home__p-link'>Kahit Ano</Link> menu!
            </p>
            <div className="home__button-wrapper">
                <Link to='/rates' className='primary-btn home__btn'>Explore<br/>Rates</Link>
                <Link to='/food' className='primary-btn home__btn'>Explore<br/>Food</Link>
            </div>
            <div className="home__review-container">
                <h2 className='home__review-subtitle'>Customer Reviews: </h2>
                <div className="home__review-wrapper">
                    <img className='home__review-icon' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'/>
                    <div className="home__review-p-container">
                        <p className='home__review'>&quot;The food is really good! The customer service is great, and the ambience is so cozy 10/10 will come back!&quot;</p>
                        <p className='home__customer-name'>-Carl Dennis Pineda</p>
                    </div>
                </div>
                <div className="home__review-wrapper">
                    <img className='home__review-icon' src='https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg'/>
                    <div className="home__review-p-container">
                        <p className='home__review'>&quot;Food choices are very vast, very delicious pallete, quality serving, appetizing foods and great customer service.&quot;</p>
                        <p className='home__customer-name'>-Tommy Rogers</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home