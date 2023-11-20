import React from "react";
import { modaConsciente } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
      <Image
        className="w-full h-full object-cover hidden md:inline-block"
        imgSrc={modaConsciente}
      />
    </div>
  );
};

export default YearProduct;
