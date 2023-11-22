import React from 'react';
import { sideNavItems } from "@/constants";
import { Slide } from 'react-toastify';
import Slider from '@/components/slider/Slider';

const About = () => {
  return (
    <div className="bg-black text-white p-8 text-center">
        <div className="text-4xl font-bold mb-4 text-[#D4AF37]">
            About Us
        </div>
      <div className="text-2xl font-bold mb-4">
        We at Tabarak Real Estate Development have been working in the field of real estate development since 2006. Our company has been providing residential and service solutions, especially in Sheikh Zayed City, and we are still working to cover all our customers’ needs.
      </div>
      <Slider />
    </div>
  );
}

export default About;
