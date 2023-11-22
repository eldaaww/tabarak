"use client";
import React, { useState } from "react";
import { getImageUrl } from "@/utilities/pocketbase.utils";
import PropertyModal from "../propertyModal/PropertyModal";

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full rounded-t-3xl overflow-hidden">
        <img
          alt={getImageUrl(property, property.name)}
          src={getImageUrl(property, property.image)}
          width={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-black p-3 flex flex-col justify-center items-center bg-white rounded-b-xl overflow-y-auto bg-fixed h-full">
        <h1 className="font-black text-4xl my-3">{property.name}</h1>
        <p className="font-medium text-center mt-auto">{property.description}</p>
        <button
          className="cursor-pointer font-semibold overflow-hidden relative border border-[#D4AF37] group px-8 py-2 mt-auto"
          onClick={openModal}
        >
          <span className="relative z-10 text-[#D4AF37] group-hover:text-white text-xl duration-500">
            View Property
          </span>
          <span className="absolute w-full h-full bg-[#D4AF37] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-[#D4AF37] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>

      {isModalOpen && (
        <PropertyModal property={property} onClose={closeModal} />
      )}
    </div>
  );
};

export default PropertyCard;
