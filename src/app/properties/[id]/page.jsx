"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PropertyDetails = ({ propertiesArray }) => {
  const router = useRouter();
  const propertyId = router.query.id;

  // Find the property details based on the propertyId
  const property = propertiesArray.find((prop) => prop.id === propertyId);

  return (
    <div>
      <h1 className="text-white">Property Details</h1>
      {property ? (
        <>
          <p className="text-white">ID: {property.id}</p>
          <p className="text-white">Name: {property.name}</p>
          <p className="text-white">Description: {property.description}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p className="text-white">Property not found</p>
      )}
    </div>
  );
};

export default PropertyDetails;
