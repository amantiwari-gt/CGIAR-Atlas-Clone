import { FOOTER_ICON } from "../utils/Links";

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer-icon" src= {FOOTER_ICON} alt="footer icon"></img>
            <ul className="footer-links">
                <li>Copyright</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
};

export default Footer;