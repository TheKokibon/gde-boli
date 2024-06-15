import React from 'react'
import Logo from '../assets/site-full-body-pain-mannequin-The-presence-of-foot-pain-was-derived-from-positive.png'
import { GooglePlayButton } from "react-mobile-app-button";

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row m-4 p-4 justify-center '>
        <div className='flex flex-col justify-center text-center items-center md:items-start'>
        <h1 className='text-xl lg:text-3xl p-2 text-wrap'>Mapiranje bola - Jednostavno i efikasno praćenje Vašeg zdravlja</h1>
        <h2 className='text-md lg:text-xl p-2'>Pratite i beležite bolove sa lakoćom, bilo kada i bilo gde.</h2>
      <GooglePlayButton
      
        url='https://elab.fon.bg.ac.rs/'
        theme={"light"}
        className={"hover:bg-blue-800 hover:text-white self-center md:self-left m-4"}
        height={100}
        width={200}
      />
        </div>
     
        <img src={Logo} alt="Logo" className='h-1/4 self-center  md:h-1/2  '/>
        

    </div>
  )
}

export default Hero