import React from "react";
import { ProductCreateForm } from "../../components/productCreateForm";
import { useCategoryList } from "../../service/query/useCategoryList";
import { useCreateProduct } from "../../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const { data, isLoading } = useCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };
  return (
    <div>
      {!isLoading && <ProductCreateForm categoryData={data} submit={submit} />}
    </div>
  );
};
