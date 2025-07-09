import { LOGO_URL } from '../utils/contants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    useEffect(()=>{
        console.log("useEffect render");
    },[btnName])

    const online = useOnlinestatus();
   // let btnName = "Login";
    return (
        <div className="flex-100 bg-gray-200 shadow-lg m-4">
            <div className="logo-container">
            <div className="w-32">
                <img className="relative top-3 left-10 rounded-3xl" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                    <ul className='relative bottom-12 right-10 flex justify-end gap-4'>
                        <li>Online Status: {online ? "🟢" : "🔘" }</li>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <button className="cursor-pointer bg-gray-300 w-20 rounded-3xl"
                            onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}
                        >{btnName}</button>
                    </ul>
            </div>
            </div>
        </div>
    );
}


export default Header;