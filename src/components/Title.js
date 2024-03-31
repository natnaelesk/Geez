import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Title = ({longBoots , link}) => {
    return ( 
        <div className=" p-smPadd md:my-10 xl:my-24 xl:gap-7  sm:gap-3 flex justify-center items-center flex-col">
            <h1 className="font-playPlayfair font-semibold  xl:text-notxl text-textsm md:text-mdlg">{longBoots.title}</h1>
            <p className=" lg:w-lgsclWD xl:w-someWD   xl:text-sometxt text-center font-sourcePro font-light  text-ptextsm md:text-mdp" >
                {longBoots.description}
                </p>
           <Link to={link}> <button className="w-fit px-4 py-2 md:px-7 md:py-3 bg-light-brown text-secondary-white roundelgherod text-ptextsm lg:px-8 lg:py-2 xl:px-8 xl:py-3 xl:text-sometxt font-playPlayfair lg:text-smm rounded-md md:text-mdp">{longBoots.btn}</button></Link>
        </div>
     );
}
 
export default Title;