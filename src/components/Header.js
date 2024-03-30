import { Link } from "react-router-dom/cjs/react-router-dom.min";
import call from "./images/call.svg"
const Header = () => {
    return ( 
        <header className=" w-screen h-8 bg-light-green flex justify-between items-center px-14 font-sourcePro smm:px-12 ">
            <div className="smm:hidden md:flex"></div>
            <h1 className="h-full  flex gap-2 justify-center items-center text-secondary-white text-smmm   tracking-normal whitespace-normal  md:text-smm lg:text-lgg" ><img src={call} alt=""  width={"15px"} height={"15px"}/>Contact us on tel +251 900 000 0000 </h1>
            <h1 className="h-full flex smm:gap-1 md:gap-4 justify-center items-center text-secondary-white text-smm smm:text-smmm  md:text-smm lg:text-lgg xl:gap-5" >
                <Link to="/about">
                 <li >About Us</li>
                </Link>
                <Link to="/Store">
                    <li>Store</li>
                </Link>
               
                
            </h1>
        </header>
     );
}
 
export default Header;