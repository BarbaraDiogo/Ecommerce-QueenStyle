import React from "react";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Preco from "./shopBy/Preco";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color />
      <Preco />
    </div>
  );
};

export default ShopSideNav;
