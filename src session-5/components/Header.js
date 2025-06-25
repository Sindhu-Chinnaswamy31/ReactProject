import { LOGO_URL } from '../utils/contants';
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <div className="logo">
                <img className="logo-image" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
            </div>
            </div>
        </div>
    );
}


export default Header;