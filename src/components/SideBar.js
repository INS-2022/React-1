import  HamburgerIcon from "../icons/hamburger.svg";
import {useState} from 'react';

export default function SideBar() {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const navbarClick = () => {
        setSidebarActive(current => !current);
    }

    const [isSearchActive, setSearchActive] = useState(false);
    const searchClick = () => {
        setSearchActive(current => !current);
    }
    return (
        <>
        <div className="navbar">
            <img src={HamburgerIcon} onClick={navbarClick} className="hamburger-menu-button" alt="hamburger-icon" />
            <h1 className="navbar-title">Music App</h1>
            <img src={HamburgerIcon} onClick={searchClick} className="hamburger-menu-button" alt="hamburger-icon" />
        </div>
        <div className="search-container">
            {isSearchActive && <form className="search-form">
                <input type="text" className="search-input" placeholder="Search..." />
            </form>}
        </div>
        <div className="sidebar-container">
            {isSidebarActive && <ul className="sidebar">
                <li className="sidebar-item"><a className="sidebar-link" href="/">Home</a></li>
                <li className="sidebar-item"><a className="sidebar-link" href="/about">About</a></li>
                <li className="sidebar-item"><a className="sidebar-link" href="/songs">Songs</a></li>
            </ul>}
        </div>
        </>
    )
}
