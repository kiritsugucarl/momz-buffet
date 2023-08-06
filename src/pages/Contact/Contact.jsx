import './Contact.css'

const Contact = () => {
    return(
        <main className='contact container section'>
            <h1 className='contact__title'>
                HAVE QUESTIONS OR INQUIRY<br/> 
                ABOUT THE RESTAURANT?
            </h1>
            <div className="contact__container">
                <form className='contact__form'>
                    <div className="contact__form-item-wrapper">
                        <label className='contact__label'>Name : </label>
                        <input type='text' className='contact__input' name='name'/>
                    </div>
                    <div className="contact__form-item-wrapper">
                        <label className='contact__label'>Contact Number : </label>
                        <input type='text' className='contact__input' name='contact'/>
                    </div>
                    <div className="contact__form-item-wrapper">
                        <label className='contact__label'>Email Address : </label>
                        <input type='text' className='contact__input' name='emailAddress'/>
                    </div>
                    <div className="contact__form-item-wrapper">
                        <label className='contact__label'>Message : </label>
                        <input type='text' className='contact__input' name='message'/>
                    </div>
                    <div className="contact__button-container">
                        <button type='button' className='contact__submit'>
                            CONTACT US
                        </button>
                    </div>
                </form>
                <div className="contact__notice">
                    <p className='contact__notice-p'>or</p>
                    <p className='contact__notice-p'>Reach us out</p>
                    <div className="contact__details-container">
                        <p className='contact__details'>Contact Number: +6391234567890</p>
                        <p className='contact__details'>Email Address: admin@momz.com.ph</p>
                        <p className='contact__details'>Look for MOMZ</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact