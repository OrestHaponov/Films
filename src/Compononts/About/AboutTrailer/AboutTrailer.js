import React from "react";
import TrailerPopup from "./TrailerPopup";

class AboutTrailer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    getFilmTrailerKey=()=>{
        let getTrailer = `https://api.themoviedb.org/3/movie/${this.props.filmId}/videos?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US`
        
        fetch(getTrailer)
        .then((response) => {
            return response.json();
        })
        .then((filmTrailer) => {
            let trailerKey = filmTrailer.results[0].key;
            let trailer = `https://www.youtube.com/embed/${trailerKey}`;
            this.setState({
                trailer 
            })
        });
    }

    componentDidMount(){
        this.getFilmTrailerKey();
    }

    render(){
        return(
            <div className="about__info__trailer">
                {this.state.trailer != '' ?
                    <TrailerPopup 
                        trailer={this.state.trailer}
                    />
                :null}
            </div>
        )
    }
}

export default AboutTrailer;