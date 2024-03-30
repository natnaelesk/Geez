import { useEffect, useState } from "react";
import back from "./images/back.svg";
import heart from "./images/heart-svgrepo-com(1).svg";
import heart1 from "./images/heart-svgrepo-com(2) copy.svg";
import bag from "./images/shopBag.svg"
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import pic from selectedItem

const Chart = () => {  
  const location = useLocation();
  const [item, setItem] = useState(location.state.item);
  const [like, setLike] = useState(location.state.item.like);
  const history = useHistory(); 

  useEffect(() => {
    // When the 'like' state changes, update the 'like' value in the 'item' object
    setItem(prevItem => ({ ...prevItem, like: like }));
  }, [like]);

  const goBack = () => {
    history.goBack();
  };


  const Change= ( ch )=>{
  document.getElementById('ShowImg').style.backgroundImage = `url(${require(`${ item.name + ch + ".jpg" }`)})`
}

const likeIt = () => {
    setLike("1");
    setItem(prevItem => ({ ...prevItem, like: "1" }));
  }; 
  
  const dislikeIt = () => {
    setLike("0");
    setItem(prevItem => ({ ...prevItem, like: "0" }));
  }; 
    return ( 
        <div className="overflow-x-hidden w-screen">
            <div className=" w-full h-20 mt-2 flex justify-between items-end px-smPadd lg:px-20 xl:px-48">
            <img onClick={goBack} src={back} alt="" className="w-8 md:w-10 cursor-pointer"/>
            
            {
            like === "0" ? (
                    <img onClick={()=>{ likeIt() }} src={heart} alt="" className="w-8 md:w-10" />
                 ) : (
                  <img onClick={()=>{ dislikeIt() }} src={heart1} alt="" className="w-8 md:w-10" />

                    )
        }
            </div>
        <section className=" text-center flex flex-col items-center  relative lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:px-20 xl:px-48 xl:justify-evenly" >
       <div className="lg:h-full lg:flex  lg:items-center lg:justify-center ">
        <div className="  w-80 md:w-mdsclHT md:h-144 mt-28 flex justify-center lg:mt-0 items-center h-128 bg-secondary-white shadow-lg rounded-3xl relative lg:w-iconHT lg:h-lgsclHT xl:w-cardxlWD xl:h-cardxlHT">
            <div id="ShowImg" style={{ backgroundImage:`url(${require(`${ item.name + item.img + ".jpg" }`)})`}} className="bg-center bg-cover  w-full h-3/4 xl:h-4/5 "></div>
            {/* <img src={ require(selectedItem)} alt="" /> */}
        </div>
        </div>
        <div className=" text-center flex flex-col lg:flex lg:flex-col lg:gap-5 justify-center lg:text-left items-center lg:items-start">
        <div className="xl:w-full  absolute top-2 lg:relative lg:mt-20 text-center">
            <h1 className="text-navfont  mt-3 font-playPlayfair capitalize text-light-brown md:text-textsm lg:text-pHero">Ge'ez Shoes</h1>
            <h1 className="text-pHero  font-playPlayfair   font-semibold capitalize text-dark-brown md:text-mdsm lg:text-color">{ item.title }</h1>
        </div>
        <div className=" w-80 md:w-96 flex justify-center gap-4 sm:px-3 lg:px-0 item-center lg:justify-start mt-4 ">
            <p className="text-dark-brown text-navfont capitalize font-playPlayfair font-semibold md:text-textsm lg: ">Select color</p>
            <div className="flex justify-strat item-center gap-2 lg:gap-4">
            {
                                item.color.map((cl)=>{
                                    return(
                                        <div onClick={ ()=>{ Change( cl)} }   className={ cl + " w-6 h-6 md:w-8 md:h-8 shadow-sm rounded-full  cursor-pointer"}></div> 
                                    )
                                })
                            }  
                
               {/* className="w-6 md:w-8 md:h-8  h-6 rounded-full bg-dark-brown shadow-sm"></div> */}
            </div>
        </div>
        <p className="  text-left px-smPadd lg:px-0 mt-3 lg:mt-2 sm:mt-5 text-priymary font-sourcePro md:text-navfont w-80 md:w-128 ">
            <h3 className="font-semibold text-dark-brown mb-2 text-textsm md:text-pHero  font-playPlayfair">Description </h3>
                Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
        </p>
        <div className=" w-full ">
            <p className="font-semibold font-playPlayfair text-textsm text-dark-brown mt-3 md:text-pHero text-center" >Size</p>
            <div className="flex justify-center items-center relative">
                <div className="trio bg-light-brown"></div>
                <div className="trio bg-dark-brown absolute top-2"></div>
            </div>
            <div className=" flex  w-full px-16 justify-center items-end gap-5 mt-3 ">
            <p className="font-sourcePro text-textsm relative text-light-brown opacity-60 md:text-pHero">39 <span className=" absolute top-5 font-extrabold left-3">.</span></p>
            <p className="font-sourcePro text-textsm relative text-light-brown opacity-60 md:text-pHero">40 <span className=" absolute top-5 font-extrabold left-3">.</span></p>
            <p className="font-sourcePro text-mdsm relative text-dark-brown font-semibold md:text-color ">41 <span className=" absolute top-5  font-extrabold left-3">.</span></p>
            <p className="font-sourcePro text-textsm relative text-light-brown opacity-60 md:text-pHero">42 <span className=" absolute top-5 font-extrabold left-3">.</span></p>
            <p className="font-sourcePro text-textsm relative text-light-brown opacity-60 md:text-pHero">43 <span className=" absolute top-5 font-extrabold left-3">.</span></p>
            </div>
        </div>

        
        <button className=" lg:mx-auto md:w-mdsclHT md:h-28  rounded w-80 mb-20 justify-between bg-priymary mt-20 h-24 flex shadow-md px-4 items-center">
            <div className="flex justify-center items-center gap-2">
                <img src={bag} alt="" className="w-7 md:w-10" />
                <h5 className="text-secondary-white font-sourcePro font-semibold text-navfont md:text-textsm">Add to chart</h5>
            </div>
            <p className="text-secondary-white text-navfont font-sourcePro font-semibold  md:text-textsm">
                2,900 <span className="uppercase text-lgg  md:text-navfont">Etb</span>
            </p>
        </button>
        </div>
        </ section>
        </div>
     );
}
 
export default Chart;