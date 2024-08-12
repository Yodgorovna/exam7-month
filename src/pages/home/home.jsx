import React from "react";
import { Button } from "../../components/buttons/Button";

export const Home = () => {
  return (
    <div className="px-10 flex">
      <div className=" flex-col py-[30px] rounded bg-white justify-center text-center w-[1200px]  gap-16">
        <h1 className="font-primary size-6 leading-[15px] my-[30px] mx-[405px] w-full max-w-96">
          Вы пока не создали ни одного товара
        </h1>
        <img src="./hero.png" alt="Hero" className="mx-[450px] my-16" />
        <Button label="Создать первый товар"></Button>
      </div>
    </div>
  );
};
