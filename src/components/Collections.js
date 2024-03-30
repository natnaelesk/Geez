import img from "./images/pexels-terje-sollie-298864.jpg"
import Recordes from "../recordes.json"
import { Link } from "react-router-dom/cjs/react-router-dom";
const Collections = ({show}) => {
    // let cv = "h-96 bg-light-brown"
    let list = [];
    if(show==="all"){
            list = Recordes[3].concat(Recordes[1])       
    }else if (show === "boots"){
      show = "Long Boots"
      list = Recordes[1]
    }else if (show === "casual"){
      show = "Casual Shoes"
      list = Recordes[3]
    }
    return (
            <>
            <section style={{backgroundImage:`url(${ img })`}} className="w-full h-40 lg:h-56 xl:h-72  bg-cover relative bg-center z-10 flex justify-center items-center" >
                    <div className="glass w-4/5 h-1/2 md:w-3/4 md:h-3/4 lg:w-lgsclWD lg:h-32 xl:h-44 xl:w-lgsclHT absolute"></div>
                    <h1 className="absolute z-20 text-secondary-white md:text-mdsm text-pHero font-playPlayfair capitalize lg:text-mdlg xl:text-notxl" >  {show === 'all' ? <p>All Collection</p> : (show === 'boots' ? <p>Boots Collection</p> : <p>Casual Collection</p>)}</h1>
            </section>
            <section className="w-full smm:gap-3 h-fit px-6 grid justify-center py-8 grid-cols-2w md:px-24 md:gap-10 lg:gap-10 ">
               {
               list.map((item)=>{
                  return (
                    <Link
          to={{
            pathname: '/chart',
            state: {
              item : item , 
            }}}>
                    <div id={item.id} className="w-cardWD h-cardHT xl:w-cardLgWD xl:h-cardLgHT   rounded-lg bg-secondary-white shadow-md  " key={item.id}>
                           <div style={{ backgroundImage:`url(${require(`${ item.name + item.img + ".jpg" }`)})`}} className="w-full h-cardWD rounded-t-lg xl:h-cardLgWD  bg-cover bg-center "></div>
                           <div className="mt-2 ml-2">
                              <h4 className="font-playPlayfair text-mdp ">Ge'ezShoes</h4>
                              <div>
                                 <p className="font-playPlayfair text-smm " >Price <span>2,900 <span style={{fontSize:"9.25px"}}>ETB</span></span>  <span className="text-dark-brown font-sourcePro " style={{fontSize:"9.25px"}}>+{item.color.length} colors</span></p>
                              </div>
                           </div>
               </div> </Link>
                 )
               })
             }

            </section>

          </>
          
     );
}
 
export default Collections;
