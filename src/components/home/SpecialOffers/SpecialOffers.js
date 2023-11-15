import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  tenis,
  verde,
  cinto,
  smartwatch,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20" id="promocao">
      <Heading heading="Promoções" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={tenis}
          productName="Tênis Street"
          price="115,00"
          color="Preto"
          badge={true}
          des="Tênis Street Em Material Sintético Com Cadarço E Recortes Preto."
        />
        <Product
          _id="1102"
          img={verde}
          productName="Calça Fluida Verde"
          price="110,00"
          color="Verde"
          badge={true}
          des="Calça Fluida Em Viscolinho Com Amarração No Cós Verde."
        />
        <Product
          _id="1103"
          img={cinto}
          productName="Kit 2 cintos"
          price="50,00"
          color="Marrom/Bege"
          badge={true}
          des="Kit 02 Cintos Estreitos Com Diferentes Modelos De Fivela Marrom/Bege."
        />
        <Product
          _id="1104"
          img={smartwatch}
          productName="Smartwatch"
          price="220,00"
          color="Preto"
          badge={true}
          des="Relógio Mormaii Smartwatch Molife Com Pulseira Em Silicone MOLIFEAB/8P Preto."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
