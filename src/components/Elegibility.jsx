import React from 'react'
import Button from "../components/Button"

const Elegibility = () => {
  return (
    <div id="Elegibility" className="my-16 sm:mx-6" >
          <h1 className="text-[26px] text-center font-bold mb-6">
            Who qualifies?
           </h1>
   
   
    <div className='flex flex-col sm:flex-row text-center justify-center '>
 
        <div className="text-arimo flex-col flex sm:mx-6 w-full text-center">
           
           <h2 className="text-[20px] mb-6 font-semibold">
              Children ages 0 to 17 with: <br/>
              <ul className='list-none leading-8 my-4 font-normal'>
                <li>Behavioral or emotional difficulties at home and/or school; or</li>
                <li>A diagnosis that is not a developmental challenge; or</li>
                <li>Destructive behaviors that could cause self-harm or harm to others.</li>
              </ul>
           </h2>


           <h2 className="text-[20px] mb-6 font-semibold">
              Adults (+18) with: <br/>
              <ul className='list-none leading-8 my-4 text-[18px] font-normal'>
                <li>Behavioral or emotional difficulties at home and/or school; or</li>
                <li>A diagnosis that is not a developmental challenge; or</li>
                <li>Destructive behaviors that could cause self-harm or harm to others.</li>
              </ul>
           </h2>

        </div>


     
  </div>
  <div className="w-full text-center">
  <Button title="Book an appointment" styles={"animate-pulse"}/>
  </div>
        
    </div>
   
  )
}

export default Elegibility