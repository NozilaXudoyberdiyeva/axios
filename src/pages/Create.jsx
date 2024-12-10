import { Input, Button } from "@material-tailwind/react";
import { instance } from "./../utils/axios.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  const onSubmit = (data) => {
    instance.post("/films", data).then((res) => nav("/films"));
  };

  return (
    <div>
      <form
        className="w-1/4 mx-auto pt-20 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input {...register("name")} label="title" />
        <Input {...register("imageURL")} label="imageURL" />
        <Input {...register("description")} label="desc" />
        <Button type="submit">Create</Button>
        {errors.email && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default Create;
