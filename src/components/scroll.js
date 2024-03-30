import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Scroll = ({Data}) => {
   
    let db = Data
    const [data,setData] = useState(db)
    

    const Change= ( target , ch )=>{
            const update  = [ ...data , data[target].img =  ch  ] 
                update.pop()
               setData(update);   
        }

    return ( 
        <div className="scrollmenu h-iconHT pl-10 ">
             
             
              {
                data.map((rd )=>{
                    return(
                        <div key={rd.id} className="w- border-black-3   gap-5 h-fit " >
                        <Link to={{
            pathname: '/chart',
            state: {
              item : rd , 
            }}}>
                        <img src={require(`${ rd.name + rd.img + ".jpg" }`)} alt="" className=" h-64 md:h-72 xl:h-96  m-auto"  />
                        { rd.color.length > 0  && <p className="text-smm mt-3 md:text-lgg lg:text-lgg xl:text-navfont font-playPlayfair uppercase   text-light-green ">View Colors</p> }
                        { rd.color.length === 0 && <p className="text-smm mt-3 md:text-lgg lg:text-lgg xl:text-navfont font-playPlayfair uppercase   text-light-green ">No Color</p> }
                        </Link>
                        <div style={{backgroundColor : "#"}} className="flex justify-center items-center  gap-2 mt-1 h-6  w-fit m-auto ">
                            {
                                rd.color.map((cl , index)=>{
                                    return(
                                        <div key={index} onClick={ ()=>{ Change( rd.id , cl)} }  className={ cl + " w-5 h-5  rounded-full  cursor-pointer"}></div> 
                                    )
                                })
                            }                        </div>
                        
                    </div>
                    )
                })
              }       
           
              {
                
              }  
        </div>
        );
}
 
export default Scroll;