import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCategoryList } from "../../service/query/useCategoryList";
import { CategoryCard } from "../../components/categoryCard";
import { useProductList } from "../../service/query/useProductList";
import { ProductListForm } from "../../components/productListForm/productListForm";
import { ProductCreateForm } from "../../components/productCreateForm/ProductCreateForm";
import { ProductTableForm } from "../../components/productTableForm/ProductTableForm";

export const Home = () => {
  const { id } = useParams();
  // const { data } = useProductList(id);
  // return (
  // <div className="px-10 flex">
  //   <div className=" flex-col py-[30px] rounded bg-white justify-center text-center w-[1200px]  gap-16">
  //     <h1 className="font-primary size-6 leading-[15px] my-[30px] mx-[405px] w-full max-w-96">
  //       Вы пока не создали ни одного товара
  //     </h1>
  //     <img src="./hero.png" alt="Hero" className="mx-[450px] my-16" />
  //     <Button>
  //       <Link to="/addProducts"> Создать первый товар</Link>
  //     </Button>
  //   </div>
  // </div>
  // <div>
  //   <Link to={"/addProducts"} className="p-4 bg-yellow-400">
  //     Create Product
  //   </Link>
  //   <ProductTableForm>
  //     {data?.map((item) => (
  //       <ProductListForm key={item.id} {...item} />
  //     ))}
  //   </ProductTableForm>
  // </div>

  const { data } = useCategoryList();
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};
