"use client";

import Image from "next/image";
import React from "react";
import src from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { navItems, sideNavItems } from "@/constants";

const Footer = () => {
    return (
        <div className=" bg-black my-20 pt-100">
            <div className="container mx-auto">
                <hr className="text white" />
                <div className="text-white grid grid-cols-1 md:grid-cols-3 w-full mt-20">
                    <div className=" flex flex-col items-center justify-center sm:mb-10">
                        <Image alt="logo" src={src} width={250} height={75}></Image>
                        <div className=" flex items-center justify-center w-full">
                            <FaPhoneAlt className=" rounded-full w-10 h-10 p-2 bg-[#D4AF37] text-white"></FaPhoneAlt>
                            <h1 className=" ml-4 font-black text-4xl">16341</h1>
                        </div>
                    </div>
                    <ul className=" flex flex-col items-center justify-center sm:mb-10">
                        {navItems.map((ele) => {
                            return (
                                <a href={ele.id} key={ele.id}>
                                    <li className=" font-bold text-xl mb-5 py-4 hover:border-b-2 hover:text-[#D4AF37] cursor-pointer border-[#D4AF37]">{ele.name}</li>
                                </a>
                            );
                        })}
                    </ul>
                    <ul className=" flex flex-col items-center justify-center sm:mb-10">
                        {sideNavItems.map((ele) => {
                            return (
                                <div key={ele.id} className=" flex items-center justify-center mb-5">
                                    <li className=" font-bold text-xl mr-3">{ele.id}</li>
                                    <a className="p-3 bg-[#D4AF37] rounded-full" href={ele.link} target="blank">
                                        {ele.icon}
                                    </a>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
