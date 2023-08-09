/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = ({isMobileNavOpen, onMobileMenuToggle}) => {

    const handleMobileLinkClick = () =>{
        onMobileMenuToggle(false);
    }
    
    return(
        <header className="header fullwidth">
            <Link to='/'>
                <div className="header__title-wrapper">
                    <h1 className="header__title">MOMZ</h1>
                    <h4 className="header__subtitle">Buffet and Services</h4>
                </div>
            </Link>

            <div className="nav-wrapper">
                {/* Desktop Navbar */}
                <nav className="desktop-nav">
                    <ul className="desktop-nav-ul">
                        <li className="desktop-nav-li">
                            <Link to='/rates' className="desktop-nav-link">Rates</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='/foods' className="desktop-nav-link">Food</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='/contact-us' className="desktop-nav-link">Contact</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='/about-us' className="desktop-nav-link">About Us</Link>
                        </li>
                    </ul>
                    <button className='desktop-menuButton' onClick={() => onMobileMenuToggle(!isMobileNavOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
            {/* Mobile Navbar */}
            {isMobileNavOpen && (
                <div className={`mobile-nav ${isMobileNavOpen ? 'show' : ''}`}>
                    <nav>
                        <ul className="mobile-nav-ul">
                        <li className="mobile-nav-li">
                                <Link to='/' className="mobile-nav-link" onClick={handleMobileLinkClick}>Home</Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link to='/rates' className="mobile-nav-link" onClick={handleMobileLinkClick}>Rates</Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link to='/foods' className="mobile-nav-link" onClick={handleMobileLinkClick}>Food</Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link to='/contact-us' className="mobile-nav-link" onClick={handleMobileLinkClick}>Contact</Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link to='/about-us' className="mobile-nav-link" onClick={handleMobileLinkClick}>About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar