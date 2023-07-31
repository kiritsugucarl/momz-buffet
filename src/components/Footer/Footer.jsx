import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer fullwidth section">
            <div className="footer__content-column">
                <p className="footer__p">Mock-up Website made by: Carl Dennis Pineda</p>
                <p className="footer__p">Stack used: HTML, SCSS, JS</p>
            </div>
            <div className="footer__content-column">
                <p className="footer__p">Got Questions? Contact me with:</p>
                <p className="footer__p">Email : cdbpineda02@gmail.com</p>
                <p className="footer__p">Github : kiritusugcarl</p>
            </div>
        </footer>
    )
}

export default Footer