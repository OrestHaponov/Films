import React from "react";
import {Link} from "react-router-dom";
import "./FilmCards.scss";

class FilmCards extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="filmcard">
                <div className="wrapper">
                {this.props.listFilm.map((value,index)=>{
                    let filmPoster = `https://image.tmdb.org/t/p/w500${value.poster_path}`;
                    let moreAboutFilm = `https://api.themoviedb.org/3/movie/${value.id}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US`;
                    return(
                    <div className="filmcard__inner" key={index}>
                        <Link to={{
                            pathname: '/about',
                                state: {
                                    moreAboutFilm,
                                    filmPoster,
                                    filmId: value.id,
                                }
                            }}>
                            <div className="filmcard__inner__card">
                                <div className="filmcard__inner__card__poster">
                                    <img src={filmPoster} alt=""/>
                                    <span>{value.vote_average}</span>
                                </div>
                                <div className="filmcard__inner__card__title">
                                    <h3>{value.title} <br /><span> {value.release_date.substr(0,4)}</span></h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default FilmCards;