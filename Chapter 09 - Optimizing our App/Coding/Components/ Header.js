import { NEW_LOGO, NEW_LOGO_1 } from "../utils/constant";
import { FaSignOutAlt, BsPersonCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";



const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnline(); //custom hooks

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={NEW_LOGO_1} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/" className="dropdown-item">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-house"></i>
                            </span>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="dropdown-item">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-brands fa-react"></i>
                            </span>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="dropdown-item">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="dropdown-item">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                            contact
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/grocery" className="dropdown-item">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                            Grocery
                        </Link>
                    </li> */}
                </ul>
            </div>
            <div className="logout-container" onClick={() => {
                btnName === "Login"
                    ? (setBtnName("Logout"), toast.success("User Logged In"))
                    : (setBtnName("Login"), toast.success("User Logged Out"));
            }}>
                <div className="h-online">
                    Online: {onlineStatus ? "🟢" : "🔴"}
                </div>
                <a href="#" className="dropdown-item">
                    <span style={{ padding: "7px" }}>
                        <i className="fa-solid fa-user"></i>
                    </span>{btnName}
                </a>

            </div>
        </div>
    )
}


export default Header;