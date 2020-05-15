import React from "react";
import {connect} from "react-redux";
import {addFavorite} from "../../../Store/Action/Favorite";
import NoActive from "./star_no_active.png";
import Active from "./star_active.png";

class AddFavorite extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        const film = this.props.listFavoriteFilms.filter(deleteElement=>deleteElement.id == this.props.detailsAboutFilm[0].id);
        return (
            <div className="about__info__addfavorite" onClick={()=>this.props.addFavorite(this.props.detailsAboutFilm[0],this.props.listFavoriteFilms)}>
                {film.length === 0 ?
                    <img src={NoActive} alt=""/>
                    :
                    <img src={Active} alt=""/>
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        listFavoriteFilms : state.Favorite.listFavoriteFilms
    }
}

function mapDispatchToProps(dispatch){
    return{
        addFavorite: (favoriteFilm,listFavoriteFilms)=>dispatch(addFavorite(favoriteFilm,listFavoriteFilms)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddFavorite);
