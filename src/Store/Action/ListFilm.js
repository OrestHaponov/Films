import {LIST_FILM,CHANGE_ACTIVE_PAGE} from "./actionTypes";

export function getListFilm(filmApi,pageNumber){
    return(dispatch) =>{
        fetch(filmApi)
            .then((response) => {
                return response.json();
            })
            .then((popularFilms) => {
                dispatch(listFilm(popularFilms.results));
                dispatch(changeActivePage(pageNumber,filmApi));
            });
    }
}

export function listFilm(listFilm){
    return{
        type: LIST_FILM,
        listFilm
    }
}

export function changeActivePage(pageNumber,filmApi){
    return{
        type: CHANGE_ACTIVE_PAGE,
        pageNumber,filmApi
    }
}