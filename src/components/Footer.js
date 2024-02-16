import img from "./images/logo.png"

const Footer = () => {
    return ( 
        <section className="w-full text-center text-secondary-white h-iconHT bg-priymary flex flex-col justify-start items-center">
            <img src={img} alt="" className="h-56 border- " />
            <div className="flex gap-20 font-sourcePro text-sometxt">
                <div className="flex flex-col gap-4">
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                </div>
                <div className="flex flex-col gap-4">
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                </div>
            </div>
            <div className="flex flex-col mt-11 ">
                <h4>Join us</h4>
                <input type="email" name="" id="" className="w-56 h-11 rounded-full bg-light-brown text-center font-sourcePro text-secondary-white " placeholder="ENTER YOUR EMAIL" />
            </div>
        </section>
     );
}
 
export default Footer;
<section>

</section>