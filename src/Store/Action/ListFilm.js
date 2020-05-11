import {LIST_FILM} from "./actionTypes";

export function getListFilm(){
    return(dispatch) =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=1")
            .then((response) => {
                return response.json();
            })
            .then((popularFilms) => {
                dispatch(listFilm(popularFilms.results))
            });
    }
}

export function listFilm(listFilm){
    return{
        type: LIST_FILM,
        listFilm
    }
}