"use client";
import React, { useState } from 'react';
import { getImageUrl } from '@/utilities/pocketbase.utils';
import PropertyModal from '../propertyModal/PropertyModal';

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
          height={800}
        />
      </div>
      <div className="text-black p-3 flex flex-col justify-center items-center bg-white rounded-b-xl overflow-y-auto">
        <h1 className="font-black text-4xl my-3">{property.name}</h1>
        <p className="font-medium text-center">{property.description}</p>
        <button className="cursor-pointer font-semibold overflow-hidden relative border border-[#D4AF37] group px-8 py-2" onClick={openModal}>
          <span className="relative z-10 text-[#D4AF37] group-hover:text-white text-xl duration-500">
            View Property
          </span>
        </button>
      </div>

      {isModalOpen && <PropertyModal property={property} onClose={closeModal} />}
    </div>
  );
};

export default PropertyCard;
