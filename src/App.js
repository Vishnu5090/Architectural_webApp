import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
//import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <Portfolio />
        <Services />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
     
    </div>
  );
};

export default App;
