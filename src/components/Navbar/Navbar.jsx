/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Navbar = ({isMobileNavOpen, onMobileMenuToggle}) => {

    const handleMobileLinkClick = () =>{
        onMobileMenuToggle(false);
    }
    
    return(
        <header className="header fullwidth">
            <div className="header__title-wrapper">
                <h1 className="header__title">MOMZ</h1>
                <h4 className="header__subtitle">Buffet and Services</h4>
            </div>
            <div className="nav-wrapper">
                <nav className="desktop-nav">
                    <ul className="desktop-nav-ul">
                        <li className="desktop-nav-li">
                            <Link to='' className="desktop-nav-link">Rates</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='' className="desktop-nav-link">Food</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='' className="desktop-nav-link">Contact</Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to='' className="desktop-nav-link">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar