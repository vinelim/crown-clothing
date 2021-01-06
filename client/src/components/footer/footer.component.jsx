import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Fb } from '../../assets/fb.svg';
import { ReactComponent as Insta } from '../../assets/insta.svg';

import './footer.styles.scss';

const Footer = () => (
    <div className="footer">
        <ul className="footer-container">
            <li><Link className="footer-icons" to="#"><Fb className="Facebook" /></Link></li>
            <li><Link className="footer-icons" to="#"><Insta className="Instagram" /></Link></li>
            <span className="footer-text">About</span>
            <span className="footer-text">Terms & Conditions</span>
            <span className="footer-text">Contact us</span>
        </ul>
            
    </div>
)

export default Footer;