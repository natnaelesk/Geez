import { useState } from "react";
import shoe from "./images/shoes.png";
import shoeBlack from "./images/17660525XP_14_f-removebg-preview.png"
// import video from "./images/video.mp4"
const Hero = () => {
    const [img , setImg] = useState(shoe)
    const [bgGradient , setBgGradient] = useState({
        background: "linear-gradient(180deg, rgba(221,161,94,1) 0%, rgba(221,161,94,0.7637255585828081) 35%, rgba(221,161,94,0.09425777146796221) 100%)"
    })
    const changePic = (a)=>{

        if(a===1){
            setImg(shoeBlack)
        setBgGradient({
            background: "linear-gradient(180deg, rgba(40,54,24,1) 0%, rgba(40,54,24,0.7637255585828081) 35%, rgba(40,54,24,0.09425777146796221) 100%)"
        }) 
        }
           
    }

    return ( 
        <main className="text-priymary m-0 h-lgsclHT md:h-tablet lg:h-screen  relative md:flex-row-reverse md:items-center  w-full flex justify-center flex-col pb-32   px-6 md:px-10 xl:px-xlPadd lg:px-20  lg:justify-between">
            <div className=" w-full  lg:w-1/2  relative flex flex-col justify-center items-center  gap-3  ">
                
                {/* the icon */}
                <div className="w-80  h-96 lg:w-lgsclHT  lg:h-lgsclHT justify-center mb-12 mt-32  flex items-center relative ">
                    <div style={bgGradient }  className="lg:w-iconWDsmall lg:h-iconHTsmall xl:w-iconWD xl:h-iconHT   rounded-md w-64 h-full  the-amazing-shap relative overflow-visible" >
                    </div>
                    <h1 className="  text-secondary-white  uppercase font-playPlayfair absolute -rotate-90 text-smHero top-20  -left-11 xl:left-0 xl:top-40 lg:left-32 lg:top-56 lg:text-mdfont xl:text-logo  z-20 ">Geez </h1> 
                         <div className="absolute top-1/2 right-16 text-center lg:right-60 lg:top-80 xl:right-56 xl:top-1/2  z-20 ">
                            <p className="font-playPlayfair text-secondary-white coll my-1 lg:text-pHero xl:text-color relative  z-20 " >Color</p>
                            <div className="flex justify-center items-center gap-2">
                                <div  className=" w-7 h-7  rounded-full bg-light-brown"></div>
                                <div className=" w-7 h-7 rounded-full bg-light-brown"></div>
                                <div onClick={()=>{changePic(1)}} className=" w-7 h-7 rounded-full bg-light-brown"></div>
                            </div>
                         </div>
                    <img src={img} style={{rotate:"-18.28deg"}} alt="" className="absolute w-64 -top-10 z-20 lg:w-mdsclWD lg:left-48 lg:top-16 xl:-top-10 xl:w-mdsclHT xl:left-32" />
                </div>
            </div>
            <div className=" h-1/2 relative z-20  md:text-start  md:justify-center  justify-center items-center text-center font-playPlayfair flex flex-col gap-5" >
                    <div className="flex flex-col  md:mr-auto   gap-1 leading-none  uppercase ">
                       <h1 className="text-mdsm font-semibold  font-amahricfont uppercase xl:text-smHero lg:text-mdlg">ግዕዝ</h1>
                    <h1 className="text-mdlg font-bold uppercase xl:text-lghero lg:text-smHero">Ge'ez Shoes</h1> 
                    </div>
                    <p className=" opacity-60 font-sourcePro w-full text-smm xl:text-pHero lg:text-smm ">Ge’ez shoes brings you comfortable genuine leather and casual shoes..come shop with us</p>
                    <button className="font-semibold  md:mr-auto w-fit px-8 py-2 bg-dark-brown text-secondary-white roundelgherod lg:px-8 lg:py-2 xl:px-16 xl:py-5 xl:text-pHero lg:text-smm rounded-md ">Explore</button>
                </div>
            <div className="bg2 absolute top-0 left-0 w-full h-full"></div>
        </main>
     );
}
 
export default Hero;
