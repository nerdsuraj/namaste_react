import { LOGO_URL } from "../utils/constant";
import { NEW_LOGO } from "../utils/constant";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={NEW_LOGO} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Food</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;