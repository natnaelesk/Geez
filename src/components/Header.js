import call from "./images/call.svg"
const Header = () => {
    return ( 
        <header className=" w-screen h-8 bg-light-green flex justify-between items-center px-14 font-sourcePro smm:px-12 ">
            <div className="smm:hidden md:flex"></div>
            <h1 className="h-full  flex gap-2 justify-center items-center text-secondary-white text-smm  tracking-normal whitespace-normal smm:text-smmm md:text-smm lg:text-lgg" ><img src={call} alt=""  width={"15px"} height={"15px"}/>Contact us on tel +2519045893</h1>
            <h1 className="h-full flex gap-1 md:gap-4 justify-center items-center text-secondary-white text-smm smm:text-smmm  md:text-smm lg:text-lgg" >
                <li >About Us</li>
                <li>Store</li>
            </h1>
        </header>
     );
}
 
export default Header;