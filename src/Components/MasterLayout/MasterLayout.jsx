// import React from 'react';
import Cars from '../Cars/Cars';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Landing from '../Landing.jsx/Landing';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import SendEmail from '../SendEmail/SendEmail';
import Testimonials from '../Testimonials/Testimonials';
import Work from '../Work/Work';

export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <Landing />
      <Search />
      <Cars />
      <Work />
      <ChooseUs />
      <Testimonials />
      <SendEmail/>
      <Footer />
    </>
  );
}
