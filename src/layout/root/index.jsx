import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
    }

    return (
        <div className="page-wrapper">
            <Navbar isMobileNavOpen={isMobileNavOpen} onMobileMenuToggle={handleMobileMenuToggle}/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;
