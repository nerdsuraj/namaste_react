import { NEW_LOGO, NEW_LOGO_1 } from "../utils/constant";
import { FaSignOutAlt, BsPersonCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react";



const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={NEW_LOGO_1} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <a className="dropdown-item" href="#">
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-house"></i>
                            </span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" >
                            <span style={{ padding: "7px" }}>
                                <i className="fa-brands fa-react"></i>
                            </span>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" >
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            Cart
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" >
                            <span style={{ padding: "7px" }}>
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                            contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logout-container" onClick={() => {
                btnName === "Login"
                    ? (setBtnName("Logout"), toast.success("User Logged In"))
                    : (setBtnName("Login"), toast.success("User Logged Out"));
            }}>
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