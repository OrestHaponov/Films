import React from "react";
import "./About.scss";
import AboutInfo from "./AboutInfo";
import SimilarFilms from "./SimilarFilms/SimilarFilms";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detailsAboutFilm: [],
        }
    }

    filmDetails=()=>{
        fetch(this.props.location.state.moreAboutFilm)
        .then((moreDetails) => {
            return moreDetails.json(); 
        })
        .then((moreDetailsAboutFilm) => {
            let backgroundPath  = `https://image.tmdb.org/t/p/w500${moreDetailsAboutFilm.backdrop_path}`;
            let detailsAboutFilm = [moreDetailsAboutFilm];
            this.setState({
                detailsAboutFilm,
                backgroundPath
            }) 
        });
    }

    componentDidMount(){
        this.filmDetails()
    }

    render(){
        return(
            <div className="about">
                <div className="about__background"
                        style={{backgroundImage: `url(${this.state.backgroundPath})`}}>
                    <div className="about__background__shadow">
                        {this.state.detailsAboutFilm.map((value, index)=>{
                            return(
                                <div className="wrapper" key={index}>
                                    <div className="about__poster">
                                        <img src={this.props.location.state.filmPoster} alt=""/>
                                    </div>
                                    <AboutInfo 
                                        title={value.title}
                                        releaseDate={value.release_date}
                                        overview={value.overview}
                                        budget={value.budget}
                                        runtime={value.runtime}
                                        rate={value.vote_average}
                                        genres={value.genres}
                                        filmId={value.id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <SimilarFilms 
                    filmId={this.props.location.state.filmId}
                />
            </div>
        )
    }
}

export default About;