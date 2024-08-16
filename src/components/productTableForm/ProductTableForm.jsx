import React from "react";
import { ProductListForm } from "../productListForm/productListForm";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";
import { Search } from "../search";
export const ProductTableForm = ({ children }) => {
  return (
    <div>
      <div className="relative w-[1100px] overflow-x-auto shadow-md sm:rounded-lg">
        <div className="py-4 px-4 bg-white">
          <div className="flex justify-between">
            <Button>
              <Link to={"/addProduct"}>+ Новый товар</Link>
            </Button>
            <Search />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-primary">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Изображение
              </th>
              <th scope="col" className="px-6 py-3">
                Наименование
              </th>
              <th scope="col" className="px-6 py-3">
                Категория
              </th>
              <th scope="col" className="px-6 py-3">
                Цена
              </th>
              <th scope="col" className="px-6 py-3">
                Действие
              </th>
            </tr>
          </thead>

          {children}
        </table>
      </div>
    </div>
  );
};
