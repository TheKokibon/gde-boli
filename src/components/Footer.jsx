import React from "react";
import logo from "../assets/LogoWithoutBackground.png";
import { GooglePlayButton } from "react-mobile-app-button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
<div className="flex flex-col lg:flex-row bottom-0 flex-wrap justify-center w-full h-min p-6 border-t border-t-blue-600">
        <a href="#">
        <div className="flex flex-col justify-center text-center items-center p-5">
                <img src={logo} alt="logo" className="h-20 w-min  "/>
                <h2 className="hover:text-blue-800">Gde boli</h2>
            </div>
        </a>
             <GooglePlayButton  url='https://www.youtube.com/watch?v=E6zDMdInW9I'
        theme={"light"}
        className={"hover:bg-blue-800 hover:text-white self-center md:self-left m-4"}/>   

        

   </div>
<h3 className="text-center p-4">&copy; 2024 TheKokibon. All rights reserved.</h3>
    </div>
    
  );
};

export default Footer;
