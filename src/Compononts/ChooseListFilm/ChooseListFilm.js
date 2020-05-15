import React from "react";
import {useParams} from "react-router-dom";
import ListFilms from "../ListFilms/ListFilms";

export default function ChooseListFilm() {
    let {name} = useParams();
  return (
    <div className="user">
        <ListFilms  filmType={name}/>
    </div>
  );
}

