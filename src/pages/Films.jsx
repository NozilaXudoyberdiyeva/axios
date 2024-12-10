import React, { useEffect, useState } from "react";
import { instance } from "../utils/axios";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    instance.get("/films").then((res) => {
      setFilms(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    instance.delete(`/films/${id}`).then((res) => {
      setFilms((films) => films.filter((film) => film.id !== id));
    });
  };

  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <img width={200} src={film.imageURL} alt="" />
          <h2>{film.name}</h2>
          <p>{film.description}</p>
          <Link to={`/films/${film.id}`}>
            <Button>Edit</Button>
          </Link>
          <Button
            onClick={() => {
              handleDelete(film.id);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Films;
