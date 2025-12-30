import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/Header.jsx";
import ChatWidget from "./assets/ChatWidget.jsx";
import Roomsandsuites from "./assets/Roomssuites.jsx";
import Apartmentsmain from "./assets/Apartmentsmain.jsx";
import Specialexperiences from "./assets/Specialexperiences.jsx";
import Restaurant2900 from "./assets/Restaurant2900.jsx";
import Events from "./assets/Events.jsx";
import Winebar from "./assets/Winebar.jsx";
import Meetingsconferences from "./assets/Meetingsconferences.jsx";
import Contact from "./assets/Contact.jsx";
import Faq from "./assets/FAQ.jsx";
import Gift from "./assets/Gift.jsx";
import Gallery from "./assets/Gallery.jsx";
import Abouthotel from "./assets/Aboutthehotel.jsx";
import Apartdetails from "./assets/Apartdetails.jsx";
import Viewroom from "./assets/viewroom.jsx";
import Viewexp from "./assets/Viewexp.jsx";

function App() {
  return (
    <BrowserRouter>

    
      <ChatWidget />

      <Routes>
       
        <Route path="/" element={<Header />} />

        
        <Route path="/roomsandsuites" element={<Roomsandsuites />} />
        <Route path="/apartments" element={<Apartmentsmain />} />
        <Route path="/special-experiences" element={<Specialexperiences />} />
        <Route path="/Restaurant2900" element={<Restaurant2900 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/winebar" element={<Winebar />} />
        <Route path="/Meetingsconferences" element={<Meetingsconferences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/abouthotel" element={<Abouthotel />} />
        <Route path="/apartdetails" element={<Apartdetails />} />
        <Route path="/viewroom" element={<Viewroom />} />
        <Route path="/viewexp" element={<Viewexp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
