import { Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { instance } from "../utils/axios";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    instance.post("/films", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/4 mx-auto pt-20">
      <Input type="text" placeholder="Fayzullo" {...register("userName")} />
      <Input type="text" placeholder="Image url" {...register("imageURL")} />

      <Input type="email" {...register("email", { required: true })} />
      <Input type="password" {...register("parol", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <Input type="submit" />
    </form>
  );
};

export default Form;
