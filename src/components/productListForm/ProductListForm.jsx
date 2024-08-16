import React from "react";
import { Edit } from "../icons/edit";
import { Delete } from "../icons/delete";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct } from "../../service/mutation/useDeleteProduct";
export const ProductListForm = ({ id, name, img, price, categoryId }) => {
  const navigate = useNavigate();
  const mutation = useDeleteProduct();

  const handleDelete = () => {
    mutation.mutate(id, {
      onSuccess: () => {
        console.log("Product deleted successfully");
        window.location.reload();
      },
      onError: (error) => {
        console.error("Failed to delete product", error);
      },
    });
  };

  return (
    <tbody className="w-screen text-xs bg-gray-50 dark:bg-primary">
      <tr className="bg-white border-b dark:border-gray-700 hover:bg-hoverColor hover:text-white">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-primary"
        >
          <img src={img} alt="img" className="w-[250px]" />
        </th>
        <td className="px-6 py-4 font-primary text-lg ">{name}</td>
        <td className="px-6 py-4 font-primary text-lg">{categoryId}</td>
        <td className="px-6 py-4 font-primary text-lg">{price}</td>
        <td className="px-6 py-4">
          <button onClick={() => navigate(`/product-edit/${id}`)}>
            <Edit />
          </button>
          <button
            className="m-4"
            onClick={handleDelete}
            disabled={mutation.isLoading}
          >
            <Delete />
          </button>
        </td>
      </tr>
    </tbody>
  );
};
