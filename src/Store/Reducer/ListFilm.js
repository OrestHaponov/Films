import {LIST_FILM,CHANGE_ACTIVE_PAGE} from "../Action/actionTypes";

const initialState={
    listFilm: [],
    activePage: 1,
    filmApi: "https://api.themoviedb.org/3/movie/popular?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=1",
}

export default function ListFilm(state=initialState, action){
    switch(action.type){
        case LIST_FILM:
            return{
                ...state, listFilm: action.listFilm
            }
        case CHANGE_ACTIVE_PAGE:
            return{
                ...state, activePage: action.pageNumber, filmApi: action.filmApi
            }
        default:
            return state
    }
}