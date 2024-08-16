import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../buttons/Button";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-32 justify-center items-center px-28 py-10 shadow-md bg-white hover:bg-hoverColor">
      <div>
        <img className="w-44" src={img} alt="img" />
        <h2 className="font-primary">{name}</h2>
      </div>
      <div>
        <Button onClick={() => navigate(`/category-product/${id}`)}>
          Показывать
        </Button>
      </div>
    </div>
  );
};
