import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Correct import

import Navbar from './Navbar';
import Footer from './Footer';

import Homepage from './Homepage';
import About from './Company/About';
import Leadership from './Company/Leadership';
import Clients from './Company/Clients';

import LOS from './Products/LOS';
import Cops from './Products/Cops';
import Ezyb from './Products/Ezyb';
import Appco from './Products/Appco';
import Banqon from './Products/Banqon';
import Recoup from './Products/Recoup';
import Cobiz from './Products/Cobiz';
import Career from './Career';
import Calculators from './Calculators/Calculators';
import Contact from './Contact';
import Tax_Calculator from './Calculators/Tax_Calculator';
import FD_Calculator from './Calculators/FD_Calculator';
import RD_Calculator from './Calculators/RD_Calculator';
import GST_Calculator from './Calculators/GST_Calculator';
import HomeLoan_Calculator from './Calculators/HomeLoan_Calculator';
import PersonalLoan_Calculator from './Calculators/PersonalLoan_Calculator';

import Error from './Error';


function App() {

  // ---------------- load main.js forcefully -------------------
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './assets/js/main.js'; // adjust path if needed
    script.async = true;
    document.body.appendChild(script);
        
  }, []);

  

  return (
    <>
      
      {/* <BrowserRouter> */}

        <Navbar />

        <Routes>
          <Route path='*' element={<Error/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/Leadership' element={<Leadership />} />
          <Route path="/Clients" element={<Clients />} />

          <Route path="/LOS" element={<LOS />} />
          <Route path="/Cops" element={<Cops />} />
          <Route path="/Ezyb" element={<Ezyb />} />
          <Route path="/Appco" element={<Appco />} />
          <Route path="/Banqon" element={<Banqon />} />
          <Route path="/Recoup" element={<Recoup />} />
          <Route path="/Cobiz" element={<Cobiz />} />
          
          <Route path="/Career" element={<Career />} />
          <Route path="/Calculators" element={<Calculators/>} />
          <Route path="/Contact" element={<Contact />} />

          <Route path='/Tax_Calculator' element={<Tax_Calculator />} />
          <Route path='/FD_Calculator' element={<FD_Calculator />} />

          <Route path='/RD_Calculator' element={<RD_Calculator />} />
          <Route path='/GST_Calculator' element={<GST_Calculator />} />
          <Route path='/HomeLoan_Calculator' element={<HomeLoan_Calculator />} />
          <Route path='/PersonalLoan_Calculator' element={<PersonalLoan_Calculator />} />

        </Routes>

        <Footer />

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
