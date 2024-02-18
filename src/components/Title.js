const Title = ({longBoots}) => {
    return ( 
        <div className=" p-smPadd  gap-5 flex justify-center items-center flex-col">
            <h1 className="font-playPlayfair xl:text-notxl text-textsm md:text-mdlg">{longBoots.title}</h1>
            <p className=" lg:w-lgsclWD xl:w-someWD   xl:text-sometxt text-center text-ptextsm md:text-mdp" >
                {longBoots.description}
                </p>
            <button className="w-fit px-5 py-2 md:px-7 md:py-3 bg-light-brown text-secondary-white roundelgherod text-ptextsm lg:px-8 lg:py-2 xl:px-8 xl:py-3 xl:text-sometxt font-playPlayfair lg:text-smm rounded-md md:text-mdp">{longBoots.btn}</button>
        </div>
     );
}
 
export default Title;