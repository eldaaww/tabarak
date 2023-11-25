"use client";
import React from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { getImageUrl } from "@/utilities/pocketbase.utils";
import pb from "@/utilities/pb";
import { useEffect } from "react";
import { useState } from "react";


const Properties = () => {
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    pb.autoCancellation(false);
    setIsLoading(true);
    pb.collection("properties")
    .getFullList()
    .then(setPropertiesArray)
    .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="my-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {!isLoading && propertiesArray?.length > 0 ? 
          propertiesArray?.map((property) => {
            return <PropertyCard key={property.id} property={property} />
          }):
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">No properties found</h2>
          </div>
        }
      </div>
    </div>
  );
};

export default Properties;
