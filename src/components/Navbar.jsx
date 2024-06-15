import React, {useState, useEffect} from 'react'
import { debounce } from 'lodash';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/LogoWithoutBackground.png";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleResize = debounce(() => {
            if (window.innerWidth >= 768 && nav) {
                setNav(false);
            }
        }, 100); // 100ms debounce delay

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            handleResize.cancel(); // Cancel any pending debounced calls
        };
    }, [nav]);

    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    



  return (
    <div className='flex justify-between items-center h-20 w-full mx-auto px-4 text-blue-500 bg-inherit border-b-2  border-b-blue-400 '>
            <a href='#'>
            <div className='flex flex-row justify-center items-center'>
        
                <img src={Logo} alt="Logo" className='h-20 w-min '/>
                <h1 className='hover:text-blue-800'>Gde boli</h1>
           
            </div>
            </a>
                <ul className='hidden md:flex'>
                        <li className='hover:text-blue-800 p-4 ' onClick={() => handleSmoothScroll('zasto')}>Zašto</li>
                        <li className='hover:text-blue-800 p-4'onClick={() => handleSmoothScroll('usage')}>Upotreba</li>
                        <li className='hover:text-blue-800 p-4' onClick={() => handleSmoothScroll('funct')}>Funkcionalnosti</li>
                   
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                {nav ? <X size={30} /> : <Menu size={30} />}
            </div>

            <div className={`z-20 fixed left-0 top-0 w-1/2 h-full border-r border-r-[black] bg-white ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                    <a href="#">
                    <div className='flex flex-row justify-left ml-4 text-left md:items-center'>
                    <img src={Logo} alt="Logo" className='h-20 w-min'/>
                    <h1 className='hover:text-blue-800 pt-8'>Gde boli</h1>
                    </div>
                    </a>
                   
                    <ul className='p-4'>
                        <li className='hover:text-blue-800 p-4 border-b border-b-blue-300'>Zašto</li>
                        <li className='hover:text-blue-800 p-4 border-b  border-b-blue-300 '>Funkcionalnosti</li>
                        <li className='hover:text-blue-800 p-4  '>Upotreba</li>
                        
    
                    </ul>

            </div>
    </div>
  )
}

export default Navbar