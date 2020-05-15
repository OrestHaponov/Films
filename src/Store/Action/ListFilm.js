import {LIST_FILM,CHANGE_ACTIVE_PAGE,FILM_REVIEWS} from "./actionTypes";

export function getListFilms(filmApi,activePage){
    return(dispatch)=>{
        fetch(filmApi)
        .then((response) => {
            return response.json();
        })
        .then((filmsList) => {
            dispatch(listFilm(filmsList.results));
            dispatch(changeActivePage(filmApi,activePage));
        });
    }
}

export function listFilm(listFilm){
    return{
        type: LIST_FILM,
        listFilm
    }
}

export function changeActivePage(filmApi,activePage){
    return{
        type: CHANGE_ACTIVE_PAGE,
        filmApi,activePage
    }
}

export function getReviews(filmId){
    return(dispatch)=>{
        fetch(`https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=1`)
        .then((response) => {
            return response.json();
        })
        .then((reviews) => {
            dispatch(filmReviews(reviews.results))
        });
    }
}

export function filmReviews(reviews){
    return{
        type: FILM_REVIEWS,
        reviews
    }
}
