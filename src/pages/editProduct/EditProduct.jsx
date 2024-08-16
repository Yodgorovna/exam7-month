import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProduct } from "../../service/mutation/useEditProduct";
import { useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isSuccess } = useEditProduct();

  const submit = (data) => {
    mutate({ id, data });
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/category-product/${id}`);
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className="ml-[300px] mt-9 w-[800px] space-y-6 rounded bg-primary p-[30px] text-black shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Edit Product
        </h1>
        <div className="mb-4">
          <label htmlFor="img" className="mb-2 block font-semibold text-white">
            Image URL
          </label>
          <input
            id="img"
            placeholder="Enter image URL"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("img", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-semibold text-white">
            Product Name
          </label>
          <input
            id="name"
            placeholder="Enter product name"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="mb-2 block font-semibold text-white"
          >
            Price
          </label>
          <input
            id="price"
            placeholder="Enter price"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("price", { required: true })}
          />
        </div>

        <Button className="w-full" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEditProduct } from "../../service/mutation/useEditProduct";
// import { useForm } from "react-hook-form";
// export const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { register, handleSubmit, reset } = useForm();

//   const { mutate, isSuccess } = useEditProduct();

//   const submit = (data) => {
//     mutate({ id, data });
//     reset();
//   };

//   if (isSuccess) {
//     navigate("/category");
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(submit)}
//         className="ml-[300px] mt-9  w-[800px] space-y-6 rounded-[40px] bg-[#272222] p-[30px] text-black shadow-lg"
//       >
//         <h1 className="mb-6 text-center text-2xl font-bold text-white">
//           Edit Product
//         </h1>
//         <div className="mb-4">
//           <label htmlFor="img" className="mb-2 block font-semibold text-white">
//             Image URL
//           </label>
//           <input
//             id="img"
//             placeholder="Enter image URL"
//             className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             type="text"
//             {...register("img", { required: true })}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="mb-2 block font-semibold text-white">
//             Product Name
//           </label>
//           <input
//             id="name"
//             placeholder="Enter product name"
//             className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             type="text"
//             {...register("name", { required: true })}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="price"
//             className="mb-2 block font-semibold text-white"
//           >
//             Price
//           </label>
//           <input
//             id="price"
//             placeholder="Enter price"
//             className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             type="text"
//             {...register("price", { required: true })}
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-lg bg-cyan-600 p-4 font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
