import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  novidade1,
  novidade2,
  novidade3,
  novidade4,
  novidade5,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const Novidades = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16"  id="novidades" >
      <Heading heading="Novidades"/>
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={novidade1}
            productName="Macaquinho Sarja Branco"
            price="52.00"
            color="Branco"
            badge={true}
            des="Macaquinho Sarja Com Alcinha E Amarração Traseira Branco."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={novidade2}
            productName="Camiseta Oversized Em Algodão"
            price="45.00"
            color="Cinza escuro"
            badge={false}
            des="Camiseta Oversized Em Algodão Com Bordado Stronger Na Gola Cinza Escuro."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={novidade3}
            productName="Camiseta Relaxed Em Algodão"
            price="77.00"
            color="Branco"
            badge={false}
            des="Camiseta Relaxed Em Algodão Com Gola Canelada Branco."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={novidade4}
            productName="Vestido Midi Preto"
            price="60.00"
            color="Preto"
            badge={false}
            des="Vestido New Midi Em Tule Bordado Com Flores E Manga Bufante Preto."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={novidade5}
            productName="Vestido New Midi"
            price="68.00"
            color="Laranja"
            badge={false}
            des="Vestido New Midi De Alça Em Linho Com Estampa Araras E Abacaxis Laranja."
          />
        </div>
      </Slider>
    </div>
  );
};

export default Novidades;
