import { useState } from "react";
// import jk from "./images/longBoots/long boots one/black.jpg"
const Scroll = ({lists}) => {
    const [img,setImg] = useState(lists[0].picBrown) 
    const change = (to)=>{
            if(to === "blue"){
                setImg(lists[0].picBlue)
            }else if(to === "green"){
                setImg(lists[0].picBrown)
                
            }else if(to === "black"){
                setImg(lists[0].picBlack)
                
            }else{
                setImg(lists[0].picBrown)
            }
                 
            
               
        }
    
    
    return ( 
        
        <div className="scrollmenu h-iconWDsmall pl-10 ">
            
                    
                { lists.map(
                    (li)=>
                   { 
                    return (
                        <div className="w- border-black-3 h-4/5  gap-5 ">
                        <img src={img} alt="" className="w-80 h72 m-auto" />
                        <div className="flex justify-center items-center gap-2 mt-5">
                                    <div onClick={()=>{ change("brown")}}  className=" w-5 h-5  rounded-full bg-brown cursor-pointer" ></div>
                                    <div onClick={()=>{ change("black")}} className=" w-5 h-5  rounded-full bg-black cursor-pointer" ></div>
                                    <div onClick={()=>{ change("blue")}} className=" w-5 h-5  rounded-full bg-blue cursor-pointer " ></div>
                        </div>
                    </div>
                    )}
                )}
               
           
                
</div>
        );
}
 
export default Scroll;