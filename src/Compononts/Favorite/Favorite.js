import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./Favorite.scss";
import {removeFavoriteFilm} from "../../Store/Action/Favorite";
import Date from "./Date";
import Active from "./star_active.png";

class Favorite extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="favorite">
                <div className="wrapper">
                    <div className="favorite__title">
                        <h1>Favorites</h1>
                    </div>
                    {this.props.listFavoriteFilms.map((value,index)=>{
                        let overview = value.overview.split('.')[0];
                        let filmPoster = `https://image.tmdb.org/t/p/w500${value.poster_path}`;
                        let moreAboutFilm = `https://api.themoviedb.org/3/movie/${value.id}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US`;
                        return(
                                <div className="favorite__card" key={index}>
                                    <Link to={{
                                    pathname: '/about',
                                        state: {
                                            moreAboutFilm,
                                            filmPoster,
                                            filmId: value.id,
                                        }
                                    }}>
                                        <div className="favorite__card__poster">
                                            <img src={filmPoster} alt=""/>
                                        </div>
                                    </Link>
                                    <div className="favorite__card__description">
                                        <h3>{value.title}</h3>
                                        <Date date={value.release_date} />
                                        <p>{overview}...</p>
                                        <div className="favorite__card__delete">
                                            <img src={Active} alt="" onClick={()=>this.props.removeFavoriteFilm(this.props.listFavoriteFilms,value.id)} />
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        listFavoriteFilms: state.Favorite.listFavoriteFilms,
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeFavoriteFilm: (listFavoriteFilms,filmId)=>dispatch(removeFavoriteFilm(listFavoriteFilms,filmId)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorite);


//https://www.themoviedb.org/talk/5ebe57056d675a00217bab63