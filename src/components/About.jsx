import React from 'react'
import { about } from '../assets/images'



const About = () => (
    
    <div className="relative w-full flex sm:flex-row flex-col-reverse ">
            <div className="z-[1] absolute top-0 h-[20px] bg-servicesbg blur-md shadow-2xl w-full" />

            <div className=" w-full">
              <img src={about} className="max-w-[300px] mx-auto w-full items-center object-contain justify-center h-auto" />
            
            </div>

          <div id="About" className="py-6 px-6 sm:mx-6 flex-col ">
                  <h1 className="leading-6 text-[24px] text-black mt-6">Melody Arauz</h1>
                  <h2 className="mb-4 text-[16px]">Certified Behavioral Health Case Manager (CBHCM) 
</h2>
               <p className="text-black text-[18px] leading-8">Lorem ipsum dolor 
               sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. 
                <br/>
                Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
      
              
          </div>
  
          
          
      </div>
  )

export default About