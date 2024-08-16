import React from "react";
import { useParams } from "react-router-dom";
import { useProductList } from "../../service/query/useProductList";
import { ProductListForm } from "../../components/ProductListForm";
import { ProductTableForm } from "../../components/ProductTableForm";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/Button";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  return (
    <div>
      <ProductTableForm>
        {data?.map((item) => (
          <ProductListForm key={item.id} {...item} />
        ))}
      </ProductTableForm>
      {/* //   {data?.map((item) => (
    //     <ProductTableForm key={item.id} {...item} />
    //   ))} */}
    </div>
  );
};
