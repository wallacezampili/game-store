import Bubble from '../../Resources/Bubble/bubble';
import {AiFillLinkedin, AiFillInstagram, AiFillFacebook} from "react-icons/ai";

import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='social-media'>
                <Bubble icon={<AiFillLinkedin />} link=""/>
                <Bubble icon={<AiFillInstagram />} link=""/>
                <Bubble icon={<AiFillFacebook />} link=""/>
            </div>
            <p>&copy; <span>GameLand</span></p>
        </footer>
    );
}

export default Footer;