import React from 'react';
import styles from '../style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { footerLinks, socialMedia } from '../assets/constants';
import { logo } from '../assets/images';



const Footer = () => (
  <section className={`w-screen bg-[#439A97] ${styles.flexCenter}  ${styles.paddingX} sm:pt-16 pt-6 flex-row mb-4 w-full`}>
 
  
  <div className={`${styles.flexStart} gap-12 ss:gap-x-16 sm:gap-x-20 md:gap-x-44 flex-row mb-8 w-full flex-wrap`}>
     

          {/* Useful Links */}

     <div className=" flex flex-row justify-around flex-wrap ">
      {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="text-center ss:text-start flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-arimo font-medium text-[20px] leading-[27px] text-white">
                
                 {footerLink.title}
              
                 

              </h4>
              <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) =>(
                    <a href={link.link}>
                      <li key={link.name}
                      className={` font-arimo font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-[#7ECDDD] ${index !== footerLink.length - 1 ? 'mb-4' : 'mb-0'}`}>
                          {link.name}
                      </li>
                      </a>
                  ))}
              </ul>
          </div>
      ))}
     </div>

          {/* Hours and Location */}

          <div className="flex flex-col justify-center md:mt-0 ">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
              <h4 className="font-arimo text-center font-medium text-[18px] ss:text-[20px] leading-[27px] text-white mb-4 ">
              Open Hours
              </h4>
              <h4 className="font-arimo text-center font-medium text-[16px] leading-[24px] text-dimWhite">
              Monday - Friday:
              7 AM - 9 PM <br />
              Saturday
              10 AM - 8 PM <br />
              Sunday
              12 PM - 7 PM
              </h4>
              <h4 className="font-arimo text-center font-medium text-[18px] ss:text-[20px] leading-[27px] text-white mt-4">
               Location
              </h4>

                  <a href="https://goo.gl/maps/BKCUb9ummNhQhQa58" target="_blank">
                  <div className="p-2 border-2 cursor-pointer hover:bg-[#97DECE] min-w-[200px] rounded-lg flex flex-row items-center mt-4 h-[50px]">
      
                  <LocationOnIcon alt="location"  className="object-contain rounded-lg w-[40px] h-[40px] ml-2"/>
                                  
                  <h4 className="text-black font-arimo text-center font-medium text-[18px] leading-[24px] ml-2">15463 SW 86 Terrace U101 Miami, FL, 33126</h4>
                  </div>
                  </a>
              
          </div>
      </div>




          {/* Social Media and Info*/}

      <div className="justify-around flex flex-col my-0 ">
           <div className="flex flex-col  ss:my-0 my-4 min-w-[150px] w-[200px]">

              <h4 className=" font-arimo text-center font-medium text-[18px] ss:text-[20px] leading-[27px] text-white">
              Connect with Us
              </h4>
             
              <div className="flex justify-center gap-3 flex-row mt-4">
             
                   {socialMedia.map((social, index) =>(
                  <a href={social.link} target="_blank">
                  <img 
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[30px] h-[30px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                  />
                  </a>
                  ))}

              </div>

              <div className="mt-6 font-arimo text-center font-medium text-[16px] leading-[27px] text-dimWhite">
              <img src={logo} alt="logo" className="w-[100px] h-auto mx-auto "/>
                  <h4 className="font-arimo font-semibold">Melody Arauz <br /></h4>
                  <a href="tel:786-732-5493" className="hover:text-[#7ECDDD]">(786) 498-9035 </a> <br />
                  <a href="mail:to jc.leonjewelers@gmail.com" className="hover:text-[#7ECDDD]">melodyarauz@gmail.com </a>
                
                

              </div>

              
          </div>
         
      </div>
      
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[black]">
          <p className="w-full text-center font-arimo text-[18px] leading-[27px] text-white "> © 2022 MelodyArauz - All Rights Reserved. </p>
      </div>
              
      
  </div>

  
</section>
)

export default Footer