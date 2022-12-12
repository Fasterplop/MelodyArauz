import React from 'react'
import { mission, mission2 } from '../assets/images'
import Button from './Button'

const Mission = () => (
  <div className="bg-[#FFFBEB] w-full flex sm:flex-row flex-col ">
        <div id="Mission" className="my-auto py-6 sm:w-[50%] justify-center text-center px-6 sm:mx-6 flex-col ">
                <h1 className="leading-6 mb-2 text-[24px] text-black">Our Mission</h1>
                {/* <h2>We offer a rich array of mental health services for adults
                 and children like Behavior Analysis, Targeted Case Management,
                  Counseling, Psychiatric Evaluation and a variety of approaches
                   for families wanting to improve their mental well-being. 
                   Behavioral Work commitment to quality it reflects in every
                    aspect of care an individual receives.</h2> */}
             <h2 className="text-black text-[18px] leading-8">
               The purpose of our mental health targeted case management services is to assist 
               adults and children attain self-sufficiency in living, learning, work, and social environments.

               <br/> Our mission is to conduct a thorough assessment that includes a person’s 
               emotional, social, behavioral, and developmental functioning within the home,
                work, and community.  Based on the adult’s assessment, i will develop an 
                individualized service plan, link each adult with other
                  community providers or resources, and monitor the goals set forth in the 
                  adult’s service plan.  Services are performed within our offices, or
                   patients’ homes or schools.

             
             
             <br/>I guarantee that each individual get the support they need 
             in order to access healthcare, education, or other services that they need.

            </h2>
          
            <Button styles="my-4 animate-pulse" title="I need more info"/>
        </div>

         <div>
            <img src={mission2} alt="mission" className=" justify-center w-full" />
         </div>
        
    </div>
)
 


export default Mission