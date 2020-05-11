import {LIST_FILM} from "../Action/actionTypes";

const initialState={
    listFilm: [],
}

export default function (state=initialState, action){
    switch(action.type){
        case LIST_FILM:
            return{
                listFilm: action.listFilm
            }
        default:
            return state
    }
}