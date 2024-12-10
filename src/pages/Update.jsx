import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../utils/axios";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react"; // To'g'ri import qilish
import { Button } from "@material-tailwind/react";

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [film, setFilm] = useState(null);

  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/films/${id}`).then((res) => {
      setFilm(res.data);
    });
  }, [id]);

  const onSubmit = (data) => {
    instance.put(`/films/${id}`, data);
    nav("/films");
  };

  if (!film) return <div>Loading...</div>;

  return (
    <div>
      <form
        className="w-1/4 mx-auto pt-20 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input defaultValue={film.name} {...register("name")} label="title" />
        <Input
          defaultValue={film.imageURL}
          {...register("imageURL")}
          label="imageURL"
        />
        <Input
          defaultValue={film.description}
          {...register("description")}
          label="desc"
        />
        <Button type="submit">Update</Button>
        {errors.name && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default Update;
