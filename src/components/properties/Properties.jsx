import React from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import logo from "../../assets/logo.png";

import { propertiesArr } from "./propertiesArr";

const Properties = ({ properties }) => {

  return (
    <div className="my-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {propertiesArr.length > 0 ? 
          propertiesArr?.map((property) => {
            return <PropertyCard key={property.id} property={property} />
          }):
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="w-24" />
            <h2 className="text-2xl font-bold">No properties found</h2>
          </div>
          }
      </div>
    </div>
  );
};

export default Properties;
