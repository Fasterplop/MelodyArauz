import React, {useState} from 'react'
import { logo, menu, close } from '../assets/images'
import { navLinks } from '../assets/constants'
import Button from './Button';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
<nav className={`bg-gradient-to-r from-[#63acff]/90 via-[#3e97ff]/90 to-[#177bf2] items-center w-full flex justify-between px-16 navbar`} >
        
        {/* Logo and Info */}

        <img src={logo} alt="Melody Arauz" className=" object-contain w-[120px]"/>
        <div className="">
        <h1 className="md:block hidden text-[20px] text-blue-800 font-bold hover:text-[24px] hover:cursor-pointer font-arimo">(786) 498-9035</h1>
        <h1 className="md:block hidden font-arimo font-bold"> Melody Arauz </h1>
        {/* <h2 className="sm:flex hidden text-[12px]"> 15465 SW 86 Terr. U 101 <br /> Miami, Fl. - 33193</h2> */}
        </div>
       
        {/* PC/LAPTOP */}

        <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav,index) =>(
                <li 
                key= {nav.id}
                className={` w-max hover:text-[#002B4D] hover:p-1 hover:text-[24px]  md:text-[18px] text-[16px] font-arimo font-semibold cursor-pointer text-blue-900 mr-6 `}>
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}      
                <li>
                    <Button styles="" title="Call Us"/>
                </li>
        </ul>

            {/* Mobile Menu/Close */}

            <div className="sm:hidden mr-0 justify-end items-center z-20">
        <img src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
        />
        </div>

         {/* Mobile NavBar / Sidebar */}

           
    <div className={`${toggle ? 'flex pt-14' : 'hidden'} absolute z-10 sm:hidden p-6 bg-gradient-to-r from-[#63acff] top-1 right-5 mx-6 my-6 min-w-[180px] rounded-xl sidebar `}>
    
        <ul className="list-none flex flex-col justify-end text-center items-center flex-1">
        {navLinks.map((nav,index)=>(
            <li
            key={nav.id}
            className={` font-arimo font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1? 'mr-0' : 'mb-4'} hover:text-[#002B4D] hover:text-[18px] text-blue-800 `}>
                <a href={`#${nav.id}`}>
                     {nav.title}
                </a>
            </li>
        ))}

        </ul>
    </div>


    </nav>
  )
}

export default Navbar