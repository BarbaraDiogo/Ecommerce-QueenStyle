import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Sobre = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Sobre nós" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Queen Style</span>{" "}
          é uma loja virtual dedicada à promoção da sustentabilidade na moda. Nosso objetivo é incentivar a reutilização de peças, oferecendo tanto itens novos quanto a opção de troca de peças em bom estado com nossos clientes. Acreditamos que essa abordagem contribui para prolongar a vida útil das roupas, promovendo um ciclo mais sustentável de consumo. Ao permitir que os produtos sejam compartilhados e reutilizados por diferentes pessoas, buscamos ativamente reduzir o impacto ambiental associado à indústria da moda. Junte-se a nós nessa jornada para tornar a moda mais consciente e amiga do meio ambiente.
        </h1>
        <Link to="/produtos">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
