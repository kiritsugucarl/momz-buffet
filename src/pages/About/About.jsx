import './About.css'

const About = () => {
    return(
        <main className='about container section'>
            <h1 className='about__title'>ABOUT THE OWNER</h1>
            <div className="about__details-container">
                <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043254-avatar-elderly-grandma-nanny_113280.png" className='about__img'/>
                <div className="about__details-wrapper">
                    <h4 className='about__details-subtitle'>Momz Luningning Santos</h4>
                    <p className='about__details-p'>Luningning Santos, 36 year old started the buffet restaurant. She was a simple businesswoman, until the moment that she decided to take a step further in the business world.</p>
                    <p className="about__details-p">She became the Momz, the owner of Momz Buffet and now provides quality and excellent buffet experience to everyone who takes on their store.</p>
                </div>
            </div>
            <div className="about__details-footer">
                <div className="about__details-footer-item">
                    <h4 className='about__details-footer-subtitle'>LOCATION</h4>
                    <p className='about__details-footer-p'>123 Mabuhay St. Porto</p>
                    <p className='about__details-footer-p'>Agency Bldg.</p>
                    <p className='about__details-footer-p'>Makati City 1017</p>
                </div>
                <div className="about__details-footer-item">
                    <h4 className='about__details-footer-subtitle'>CONTACT</h4>
                    <p className='about__details-footer-p'>Contact Number : +6391234567890</p>
                    <p className='about__details-footer-p'>Email Address : admin@momz.com.ph</p>
                </div>
            </div>
        </main>
    )
}

export default About