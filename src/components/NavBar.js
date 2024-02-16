import logo from "./images/logo.png"
import profile from "./images/profile.svg"
import cart from "./images/shopping-cart.svg"
import search from "./images/search.svg"
import menu from "./images/menu-svgrepo-com.svg"
const NavBar = () => {
    return ( 
    <nav className="flex-all w-screen z-50 h-16 bg-secondary-white shadow-lg sticky top-0 flex-all-center px-6 md:px-10 xl:px-xlPadd  lg:px-20 ">
        <div className="flex-all  w-full h-full ">
                <div className="text-priymary font-playPlayfair text-nav  gap-14 text-navfont md:hidden lg:flex sm:hidden smm:hidden">
                    <li><a href="#home">Men</a></li>
                    <li><a href="#home">Women</a></li>
                </div>
                <div>
                    <img src={logo} alt="" className="w-28" />
                </div>
                <div className="flex gap-4">
                    <img src={search} alt="" width={"25px"} height={"25px"} className="lg:flex smm:hidden"/>
                    <img src={cart} alt="" width={"25px"} height={"25px"} className="lg:flex smm:hidden" />
                    <img src={profile} alt="" width={"25px"} height={"25px"} className="lg:flex smm:hidden" />
                    <img src={menu} alt="" width={"25px"} height={"25px"} className="lg:hidden " />
                </div>
        </div>
    </nav>
     );
}
 
export default NavBar;