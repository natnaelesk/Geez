import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import profile from "./images/profile.svg";
import cart from "./images/shopping-cart.svg";
import search from "./images/search.svg";
import menu from "./images/menu-svgrepo-com.svg";
import closeimg from "./images/rightBack.svg";
import iig from "./images/424961468_17993288012529620_2205486213255683761_n.jpg";
import rec from "../recordes.json"
const NavBar = () => {
    const [displayNav, setDisplayNav] = useState({ right: "-100vw" });

    const callNav = () => {
        setDisplayNav({ right: "0" });
    };

    const closeNav = () => {
        setDisplayNav({ right: "-100vw" });
    };

    return (
        <nav className="bg-cover sticky top-0 flex-all w-screen z-40 h-16 bg-secondary-white shadow-lg flex-all-center px-6 md:px-10 xl:px-xlPadd lg:px-20">
            <div id="anima" style={displayNav} className="px-6 transition flex-col flex absolute top-0 z-50 w-2/3 h-screen bg-secondary-white">
                <div className="flex justify-between my-5">
                    <img src={logo} alt="" className="w-28" />
                    <img src={closeimg} onClick={closeNav} alt="" className="w-8 h-8 cursor-pointer" />
                </div>
                <ul  className="w-full text-navfont font-playPlayfair text-primary ">
                <Link to="/boots"><li onClick={closeNav} style={{color:"#000 "}} className="w-full h-16 flex items-center justify-between">Boots
                        <div className="w-3 h-3 border-r border-t rotate-45"></div>
                    </li></Link>
                    <Link to="/casual"><li onClick={closeNav}  style={{color:"#000 "}} className="w-full h-16 flex items-center justify-between">Casual
                        <div className="w-3 h-3 border-r border-t rotate-45"></div>
                    </li></Link>
                    <Link to="/collection"><li onClick={closeNav}  style={{color:"#000 "}} className="w-full h-16 flex items-center justify-between">Collections
                        <div className="w-3 h-3 border-r border-t rotate-45"></div>
                    </li></Link>
                    <Link to={{
            pathname: '/chart',
            state: {
              item : rec[1][0] , 
            }}} ><li style={{color:"#000 "}} onClick={closeNav}  className="w-full h-16 flex items-center justify-between">Cart
                        <div className="w-3 h-3 border-r border-t rotate-45"></div>
                    </li></Link>
                </ul>
                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                    <img src={iig} alt="" className="w-1/2 border-2 shadow-md rounded-sm border-dark-brown" />
                    <p style={{color:"#000 "}} className="text-center mt-4 px-0 mb-2 font-playPlayfair ">
                        "Indulge in comfort and style with our premium leather shoes, crafted for timeless elegance and unmatched quality." 
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center w-full h-full">
                <div className=" font-playPlayfair text-nav gap-14 text-navfont md:hidden lg:flex sm:hidden smm:hidden">
                    <Link to="/boots">
                        <li>Boots</li>
                    </Link>
                    <Link to="/casual">
                        <li>Casual</li>
                    </Link>
                    <Link to="/collection">
                        <li>Collections</li>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className="w-32 md:w-48" />
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link to="/">
                        <img src={search} alt="" width="25px" height="25px" className="lg:flex smm:hidden" />
                    </Link>
                    <Link to={{
            pathname: '/chart',
            state: {
              item : rec[1][0] , 
            }}} >
                        <img src={cart} alt="" width="25px" height="25px" className="lg:flex smm:hidden" />
                    </Link>
                    <Link to="">
                        <img src={profile} alt="" width="25px" height="25px" className="lg:flex smm:hidden" />
                    </Link>
                    <img onClick={callNav} src={menu} alt="" width="25px" height="25px" className="lg:hidden cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
