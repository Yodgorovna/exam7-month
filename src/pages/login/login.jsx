import React from "react";
import { Button } from "../../components/buttons/Button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../service/mutation/useLogin";
import { saveState } from "../../config/storage";
import { RedButton } from "../../components/buttons/RedButton";

const schema = z.object({
  email: z.string().min(3, "Please enter a valid value"),
  password: z
    .string(2)
    .min(3, "eng kam qiymat 3ta")
    .max(4, "eng ko'p qiymat 4 ta"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });

  const { mutate } = useLogin();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] bg-bgColor p-[35px] rounded-sm">
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
          <div className="mb-4">
            <input
              placeholder="Email"
              className="w-full p-3 bg-white rounded"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              placeholder="Password"
              className="w-full p-3 bg-white rounded"
              type="password"
              {...register("password")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-between">
            <Button className=""> send</Button>
            <RedButton>cancel</RedButton>
          </div>
        </form>
      </div>
    </div>
  );
};
