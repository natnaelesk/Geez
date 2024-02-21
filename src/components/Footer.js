import { useEffect } from "react";
import img from "./images/logo.png"
import video from "./images/video-2.mp4"
const Footer = () => {
    useEffect(()=>{
        document.getElementsByTagName("video").playbackRate = 15;
    },[])
     
    return ( 
        <section className="px-midPadd relative w-full text-center text-secondary-white h-iconHT bg-p flex flex-col justify-start items-center">
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
            <div className="flex flex-col mt-11 w-full ">
                <h4>Join us</h4>
                <div className="w-full relative h-14 flex justify-center items-center">
                <input type="email" name="" id="" className="w-full  h-full rounded-full bg-dark-brown text-center font-sourcePro text-secondary-white place" placeholder="ENTER YOUR EMAIL" />
                <div className="w-11 h-11 rounded-full absolute bg-priymary  right-4">
                    <img src={img} alt="" />
                </div>
                </div>
                
            </div>
            <div className="absolute h-32 bottom-0 w-full flex justify-between items-center text-left ">
                <div className="w-1/4 h-0.5 bg-secondary-white"></div>
                <div className="w-1/2   ">
                <h1 className=" border-3 flex  text-ptextsm relative border-3  z-10">@2024.This website designed and depeloped by 
                <div className="contt">
                    <div className="div">
                        <h1 className=" bg-p font-semibold capitalize">#natnael Esk</h1>
                    <video src={video} id="myVideo " loop autoPlay muted ></video>
                    </div>
                </div>
                </h1>
                </div>
                <div className="w-1/4 h-0.5 bg-secondary-white"></div>
            </div>
            
        </section>
     );
}
 
export default Footer;
<section>

</section>