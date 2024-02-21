import { useState } from "react";


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
                data.map((rd)=>{
                    return(
                        <div  className="w- border-black-3 h-80   gap-5  " key={rd.id}>
                        <img src={require(`${ rd.name + rd.img + ".jpg" }`)} alt="" className="  m-auto"  />
                        <p className="text-smm mt-3 md:text-lgg lg:text-lgg xl:text-navfont font-playPlayfair uppercase   text-light-green ">Color</p>
                        <div style={{backgroundColor : "#"}} className="flex justify-center items-center  gap-2 mt-1  w-fit m-auto ">
                            {
                                rd.color.map((cl)=>{
                                    return(
                                        <div  onClick={ ()=>{ Change( rd.id , cl)} }  className={ cl + " w-5 h-5  rounded-full cursor-pointer"}></div> 
                                    )
                                })
                            }
                               {/* <div  onClick={ ()=>{ Change( rd.id , 'one')} }  className=" w-5 h-5  rounded-full bg-brown cursor-pointer" ></div> 
                                <div onClick={ ()=>{ Change( rd.id , 'two')} } className=" w-5 h-5  rounded-full bg-black cursor-pointer" ></div>
                                <div onClick={ ()=>{ Change( rd.id , 'three')} } className=" w-5 h-5   rounded-full bg-blue cursor-pointer " ></div> */}
                        </div>
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