"use client";

import Image from "next/image";
import React from "react";
import banner from "../../assets/Banner.jpg";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="w-full bg-black mb-20">
            <div className="container mx-auto flex-col xl:flex-row flex justify-between items-center xl:items-start h-full">
                <div className=" ml-0  mt-5 mb-32 xl:ml-16 xl:mt-48 h-64 flex flex-col items-center md:items-start">
                    <p className="scale-in-center text-white font-thin text-2xl leading-loose">ALWAYS THE BEST WAY TO</p>
                    <h1 className="scale-in-center text-white font-black text-6xl md:text-8xl">Building</h1>
                    <h1 className="scale-in-center text-white font-black text-6xl md:text-8xl">Choices</h1>
                    <button className="jello-horizontal bg-black text-[#D4AF37] border-2 border-[#D4AF37] mt-20 py-5 px-20 text-4xl flex justify-center items-center font-bold hover:bg-[#D4AF37] hover:text-white transition-colors duration-100 rounded-full">
                        16341
                    </button>
                </div>
                <div className="xl:block xl:ml-16 xl:mr-4 mt-8 overflow-hidden w-full h-4/5 rounded-3xl ">
                    <Image className="kenburns-bottom" alt="" src={banner} style={{ width: "100%", height: "100%" }}></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;
