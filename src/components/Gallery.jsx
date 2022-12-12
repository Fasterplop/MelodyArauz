import React, {useState} from 'react'
import { galleryImages } from '../assets/constants/Gallery';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (title) =>{
    setTempImgSrc(title);
    setModel(true);
  }

   return (
    <div className="bg-servicesbg py-16">
    <h1 className="text-center font-arimo font-bold text-[26px] mb-6 ">Gallery</h1>

    <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc}/>
        <CloseIcon onClick={()=> setModel(false)}/>
        <h1 className="font-arimo font-bold text-[40px] text-center bottom-[10%]">Melody Arauz</h1>
    </div>

    <div id="Gallery" className="gallery px-[30px] sm:px-16 md:px-40">
      {galleryImages.map((item, index)=>{
        return (
            <div className="pics" key={index} onClick={() => getImg(item.title)}>
              <img src={item.title} alt={item.id} className=" hover:bg-gray-300 shadow-2xl  w-[100%]"/>
            </div>
        )
      })}
    </div>

    </div>

  //   <section class="overflow-hidden text-gray-700 ">
  //   <div class="bg-white container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
  //     <div class="flex flex-wrap -m-1 md:-m-2">
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className=" transform transition-all hover:-translate-y-6 duration-300 shadow-2xl block object-contain object-center hover:w-[300px] hover:h-[250px] w-[250px] h-[200px] rounded-lg"
  //             src={slider1}/>
  //         </div>
  //       </div>

        


        
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className="shadow-2xl  block object-contain object-center w-[250px] h-[200px] rounded-lg"
  //             src={slider2}/>
  //         </div>
  //       </div>
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className="shadow-2xl  block object-contain object-center w-[250px] h-[200px] rounded-lg"
  //             src={slider3}/>
  //         </div>
  //       </div>
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className="shadow-2xl  block object-contain object-center w-[250px] h-[200px] rounded-lg"
  //             src={slider4}/>
  //         </div>
  //       </div>
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className="shadow-2xl  block object-contain object-center w-[250px] h-[200px] rounded-lg"
  //             src={mission2}/>
  //         </div>
  //       </div>
  //       <div class="flex flex-wrap w-1/3">
  //         <div class="w-full p-1 md:p-2">
  //           <img alt="gallery" className="shadow-2xl  block object-contain object-center w-[250px] h-[200px] rounded-lg"
  //             src={about}/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  )
}


export default Gallery