// components/PropertyModal.js
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { getImageUrl } from '@/utilities/pocketbase.utils';
import { getPropertyCatalouge } from '@/utilities/pocketbase.utils';

const PropertyModal = ({ property, onClose }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white border border-[#D4AF37] shadow-lg rounded-md max-w-3xl w-full p-6">
        <button
          className="absolute top-2 right-2 text-[#D4AF37] p-2 hover:text-[#D4AF37] rounded-full bg-white"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>

        <div className="text-black flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 relative">
            {property.name}
            <div className="w-16 h-1 bg-[#D4AF37] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          </h1>
          <img
            alt={getImageUrl(property, property.name)}
            src={getImageUrl(property, property.image)}
            className="w-full rounded-t-md mb-4"
          />
          <p className="text-base mb-4">{property.description}</p>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#D4AF37] text-white py-2 px-4 rounded hover:bg-opacity-80">
            <a href={getPropertyCatalouge(property, property.pdf)} rel="noreferrer" target='_blank' download="property.pdf">
              Download Catalouge
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
