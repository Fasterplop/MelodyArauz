import React from 'react'
import { Navbar, Hero, Mission, About, Services, Gallery, Footer, Elegibility} from './components';
import PhoneIcon from '@mui/icons-material/Phone';

const App = () => (
 <div className="w-full overflow-hidden">
    <div className="">
        <Navbar />
    </div>


    <div className=" bg-healthbg bg-cover w-full h-auto">
    {/* slider full que se vea atras del nav bar usando el opacity*/}
      <Hero />
      <Mission />
      <About />
      <Services />
      <Gallery />
      <Elegibility />
      <Footer />
      
    </div>

    <div className=" z-50 fixed bottom-10 sm:bottom-20 right-10 sm:right-20 animate-bounce flex flex-col">
      <a href="tel:786-498-9035">
      <PhoneIcon className="sm:scale-[4] scale-[2]"/>
      </a>
      
    </div>
   
 </div>

);

export default App