import {ADD_FAVORITE_FILM,REMOVE_FAVORITE_FILM} from "../Action/actionTypes";

const initialState={
    listFavoriteFilms: []
}

export default function Favorite(state=initialState, action){
    switch(action.type){
        case ADD_FAVORITE_FILM:
            return{
                ...state, listFavoriteFilms: action.listFavoriteFilms
            }
        case REMOVE_FAVORITE_FILM:
            return{
                ...state, listFavoriteFilms: action.listFavoriteFilms
            }
        default:
            return state
    }
}