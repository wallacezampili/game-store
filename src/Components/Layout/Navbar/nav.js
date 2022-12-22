import {Link} from 'react-router-dom';
import {IoGameController} from 'react-icons/io5';
import {BsList} from 'react-icons/bs';
import { useState } from 'react';

import './nav.css';


function Navbar() {

    var [menuStatus,setMenu] = useState("nav_menu close");

    function showNav()
    {
        let e = () => {
            setMenu("nav_menu active close");
            setTimeout(() =>{ setMenu("nav_menu close")}, 400);
        }

        menuStatus === "nav_menu close" ? setMenu("nav_menu active open") : e();
       
    }

    return (
        <nav className='navbar'>
            
            <div className='logo'>
                <IoGameController />                            
            </div>
       
            <ul className={menuStatus}>
                <li><Link to="/" className='nav_link'>Home</Link></li>
                <li><Link to="/store" className='nav_link'>Loja</Link></li>
                <li><Link to="/contact" className='nav_link'>Contact</Link></li>  
            </ul>
   

            <div onClick={showNav} className='nav_toggler' >
                <BsList />
            </div>
        </nav>

        
    );
}

export default Navbar;