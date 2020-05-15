import {LIST_FILM,CHANGE_ACTIVE_PAGE,FILM_REVIEWS} from "../Action/actionTypes";

const initialState={
    listFilm: [],
    activePage: 1,
    filmReviews : []
}

export default function ListFilm(state=initialState, action){
    switch(action.type){
        case LIST_FILM:
            return{
                ...state, listFilm: action.listFilm
            }
        case CHANGE_ACTIVE_PAGE:
            return{
                ...state, activePage: action.activePage, filmApi: action.filmApi
            }
        case FILM_REVIEWS:
            return{
                ...state, filmReviews: action.reviews
            }
        default:
            return state
    }
}