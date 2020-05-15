import {ADD_FAVORITE_FILM,REMOVE_FAVORITE_FILM} from "./actionTypes";

export function addFavorite(favoriteFilm,listFavoriteFilms){
    return(dispatch)=>{
        let addFilm = false;
        if(listFavoriteFilms.length === 0){
            listFavoriteFilms.push(favoriteFilm);
        }else{
            listFavoriteFilms.map((value)=>{
                if(favoriteFilm.id == value.id){
                    listFavoriteFilms = listFavoriteFilms.filter(deleteFilm=>(deleteFilm.id != favoriteFilm.id));
                    addFilm = false;
                }else{
                    addFilm = true;
                }
            })
        }
        if(addFilm){
            listFavoriteFilms.push(favoriteFilm);
            addFilm = false;
        }
        dispatch(addFavoriteFilm(listFavoriteFilms));
        location.reload();
    }
}

export function addFavoriteFilm(listFavoriteFilms){
    return{
        type:  ADD_FAVORITE_FILM,
        listFavoriteFilms
    }
}


export function removeFavoriteFilm(listFavoriteFilms,filmId){
    return(dispatch)=>{
        listFavoriteFilms = listFavoriteFilms.filter(removeFilm=>(removeFilm.id != filmId));
        dispatch(removeFilm(listFavoriteFilms));
    }
}

export function removeFilm(listFavoriteFilms){
    return{
        type:REMOVE_FAVORITE_FILM,
        listFavoriteFilms
    }
}