import React from "react";
import SimilarCarousel from "./SimilarCarousel";

class SimilarFilms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            similarFilms: []
        }
    }
    
    getSimilarFilms = () =>{
        let similarFilms = `https://api.themoviedb.org/3/movie/${this.props.filmId}/similar?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=1`;
        fetch(similarFilms)
            .then(similarFilms => {
                return similarFilms.json();
            })
            .then(similarFilmsList => {  
            let similarFilms = similarFilmsList.results;
              this.setState({
                similarFilms
              });
            });
        } 
    
    componentDidMount(){
        this.getSimilarFilms();
    }

    render(){
        return(
            <div className="about__similar">
                <h1>Similar films</h1>
                {this.state.similarFilms.length != 0 ? 
                    <SimilarCarousel 
                        similarFilms={this.state.similarFilms}
                        filmBackdropPathTamplate={this.props.filmBackdropPathTamplate}
                    />
                    :null}
            </div>
        )
    }
}

export default SimilarFilms;