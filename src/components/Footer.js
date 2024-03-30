import React from 'react';
import fb  from "./images/facebook-round-svgrepo-com.svg"
import ig  from "./images/instagram-round-svgrepo-com.svg"
import tw  from "./images/tiktok-svgrepo-com.svg"
import gm  from "./images/telegram-svgrepo-com.svg"
const Footer = () => {

     
    return ( 
        <div style={{color:"#FEFAE0 !important" }} className="font-playPlayfair ">     
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className=" mt-5">
            {/* <!-- Footer --> */}
            <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor: "#283618"}}
          >
    {/* <!-- Section: Social media --> */}
    <section
             className="d-flex justify-content-between p-4 text-white"
             style={{backgroundColor: "#DDA15E"}}
             >
      {/* <!-- Left --> */}
      <div className="me-5 text-priymary">
        <span>This is Demo Website Testing Only</span>
      </div>
      {/* <!-- Left -->

      <!-- Right --> */}
      <div className='flex'>
        <a href="https://www.facebook.com/Geezshoess/" className="text-white md:me-4 me-3">
         <img src={fb} alt="" className='fab' />
        </a>
        <a href="https://www.instagram.com/geezshoes/" className="text-white md:me-4 me-3">
        <img src={ig} alt="" className='fab' />
        </a>
        <a href="https://www.tiktok.com/@geez_shoes"className="text-white md:me-4 me-3">
        <img src={tw} alt="" className='fab' />
        </a>
        <a href="https://t.me/geezshoes" className="text-white md:me-4 me-3">
        <img src={gm} alt="" className='fab' />
        </a >
      </div>
      {/* <!-- Right --> */}
    </section>
    <section  className=" text-secondary-white">
      <div className="container text-center text-md-start mt-5">
        
        <div  className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 md:mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Ge'ez Shoes</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor:" #7c4dff", height: "2px"}}
                />
            <p className="font-sourcePro">
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 text-secondary-white mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="font-sourcePro">Boots</a>
            </p>
            <p>
              <a href="#!" className="font-sourcePro">Casual</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                />
            <p>
              <a href="#!" className="font-sourcePro text-secondary-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className=" font-sourcePro">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="font-sourcePro">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="font-sourcePro">Help</a>
            </p>
          </div>
          <div className=" font-sourcePro col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold font-playPlayfair">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px" ,backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3 "></i> Adis Abeba, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 251 900 000 000 </p>
            <p><i className="fas fa-print mr-3"></i> + 251 900 000 000 </p>
          </div>
        </div>
      </div>
    </section>
    <div
         className="text-center p-3 text-secondary-white font-sourcePro"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2024 Copyright:
      <a className="capitalize" href="https://mdbootstrap.com/"
         >  Desigend and developed by <span>Natnael Eskinder</span>
         </a>
            </div>
             </footer>
            </div>
        <div/>
        </div> 
    );
}
 
export default Footer;
<section>

</section>