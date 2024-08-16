import React from "react";
import { Button } from "../buttons/Button";
import { RedButton } from "../buttons/RedButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  categoryId: z.string().min(1, "Please select a category"),
  img: z.string().url("Please enter a valid image URL"),
  name: z.string().min(1, "Product name is required"),
  price: z
    .number()
    .min(0.01, "Price must be greater than 0")
    .or(z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number")),
});

export const ProductCreateForm = ({ submit, categoryData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  return (
    <div>
      <div className="isolate bg-white px-6 sm:pt-8 sm:pb-4 lg:px-8 w-[1200px]">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <form onSubmit={handleSubmit(submit)} className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Название <span className="">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Название"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Фотографии <span className="">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Фотографии"
                  {...register("img")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.img && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.img.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Категория <span className="">*</span>
              </label>
              <div className="mt-2.5">
                <select
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("categoryId")}
                >
                  {/* {categoryData.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))} */}

                  {categoryData.length > 0 ? (
                    categoryData.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No categories available
                    </option>
                  )}
                </select>
                {errors.categoryId && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.categoryId.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Цена <span>*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Цена"
                  {...register("price")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Страна производства
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="text"
                  id="text"
                  autoComplete="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  НДС
                </label>
                <div className="mt-2.5 flex gap-6">
                  <div className="flex items-center">
                    <input
                      disabled
                      id="disabled-radio-1"
                      type="radio"
                      defaultValue
                      name="disabled-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="disabled-radio-1"
                      className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                    >
                      10%
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      disabled
                      defaultChecked
                      id="disabled-radio-2"
                      type="radio"
                      defaultValue
                      name="disabled-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="disabled-radio-2"
                      className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                    >
                      20%
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      disabled
                      defaultChecked
                      id="disabled-radio-2"
                      type="radio"
                      defaultValue
                      name="disabled-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="disabled-radio-2"
                      className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                    >
                      Не облагается
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Описание <span></span>
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex justify-between gap-[280px]">
              <Button type="submit">Сохранить</Button>
              <RedButton onClick={() => navigate(`/home`)}>Oтмена</RedButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
