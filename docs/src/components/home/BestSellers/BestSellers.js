import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  jaqueta,
  vestido3,
  jaquetaf,
  blusa,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Mais Vendidos" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={jaqueta}
          productName="Jaqueta Gola Alta"
          price="135.00"
          color="Verde"
          badge={true}
          des="Jaqueta Alongada Em Poliamida Com Gola Alta E Zíper Verde."
        />
        <Product
          _id="1012"
          img={vestido3}
          productName="Vestido Midi Plus Size"
          price="90.00"
          color="Verde"
          badge={false}
          des="Vestido Midi em Tule Transpassado com Estampa Étnica Curve & Plus Size."
        />
        <Product
          _id="1013"
          img={jaquetaf}
          productName="Jaqueta Esportiva"
          price="69.00"
          color="Roxo"
          badge={true}
          des="Jaqueta Esportiva Em Modal Com Capuz E Fechamento Com Zíper Roxo."
        />
        <Product
          _id="1014"
          img={blusa}
          productName="Blusa Em Renda Azul"
          price="92.00"
          color="Azul"
          badge={false}
          des="Blusa Em Renda Com Amarração E Estampa De Florezinhas Azul."
        />
      </div>
    </div>
  );
};

export default BestSellers;
