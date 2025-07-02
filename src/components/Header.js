import { LOGO_URL } from '../utils/contants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    useEffect(()=>{
        console.log("useEffect render");
    },[btnName])
   // let btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
            <div className="logo">
                <img className="logo-image" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <button className="login-btn"
                            onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}
                        >{btnName}</button>
                    </ul>
            </div>
            </div>
        </div>
    );
}


export default Header;