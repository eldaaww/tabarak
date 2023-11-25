"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Slide.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import src1 from "../../assets/P02.jpg";
import src2 from "../../assets/new 3d/1.jpg";
import src3 from "../../assets/PH_8 - Axo 30.jpg";
import src4 from "../../assets/new 3d/7.jpg";
import src5 from "../../assets/PH_7 - Aerial Sketch.jpg";
import src6 from "../../assets/new 3d/3.jpg";
import src7 from "../../assets/PH.jpg";
import src8 from "../../assets/new 3d/12.jpg";

function Slider() {
    const [imgNum, setImgNum] = useState(0);

    const arrOfImg = [
        { id: 1, img: src1 },
        { id: 2, img: src2 },
        { id: 3, img: src3 },
        { id: 4, img: src4 },
        { id: 5, img: src5 },
        { id: 6, img: src6 },
        { id: 7, img: src7 },
        { id: 8, img: src8 },
      ];
      
    const next = () => {
        if (imgNum === arrOfImg.length - 1) {
            setImgNum(0);
        } else {
            setImgNum(imgNum + 1);
        }
    };
    const prev = () => {
        if (imgNum === 0) {
            setImgNum(arrOfImg.length - 1);
        } else {
            setImgNum(imgNum - 1);
        }
    };

    return (
        <div className=" my-2 text-white bg-black">
            <div className=" container mx-auto w-full flex flex-col justify-start items-center">
                <div className="flex justify-center items-center w-full h-full ">
                    <button
                        className="mr-5 bg-[#D4AF37] text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#fde777] active:bg-[#fde777] focus:outline-none"
                        onClick={() => {
                            prev();
                        }}
                    >
                        <FaArrowLeftLong />
                    </button>

                    <div className=" h-1/2 xl:h-full mt-0 w-2/3 overflow-hidden rounded-xl">
                        <Image alt={arrOfImg[imgNum].id} src={arrOfImg[imgNum].img} className="object-contain w-full h-full" />
                    </div>
                    <button
                        className=" ml-5 bg-[#D4AF37] text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#fde777] active:bg-[#fde777] focus:outline-none"
                        onClick={() => {
                            next();
                        }}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
